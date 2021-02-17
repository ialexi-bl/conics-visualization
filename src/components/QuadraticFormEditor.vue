<script lang="ts">
import { withOwnFields } from '@/types'
import drawGrid from '@/util/grid'
import drawPoint from '@/util/points'
import round from '@/util/round'
import { drawVectorToPoint } from '@/util/vector'
import { defineComponent } from 'vue'

const { abs, min } = Math
const SPAN_HORIZ = 12

const QuadraticFormEditor = defineComponent({
  data: function() {
    return withOwnFields({
      canvasWidth: 0,
      canvasHeight: 0,
      abovePoint: false,
      moving: false as false | 'matrix' | 'a12' | 'first' | 'second',
    })<{
      $refs: { canvas: HTMLCanvasElement }
    }>()
  },
  computed: {
    coefs() {
      return this.$store.state.coefs
    },
    unitsSize(): number {
      return this.canvasWidth / SPAN_HORIZ / 2.5
    },
    spanVert(): number {
      return (SPAN_HORIZ / this.canvasWidth) * this.canvasHeight
    },
    xOrigin(): number {
      return this.canvasWidth * 0.5
    },
    yOrigin(): number {
      return this.canvasHeight * 0.5
    },
    xCoordScale(): number {
      return this.canvasWidth / SPAN_HORIZ
    },
    yCoordScale(): number {
      return this.canvasHeight / this.spanVert
    },
    a12(): number {
      return this.coefs.a12
    },
    xMatrix(): number {
      return this.coefs.a11 + this.coefs.a12
    },
    yMatrix(): number {
      return this.coefs.a12 + this.coefs.a22
    },
  },
  watch: {
    coefs() {
      this.draw()
    },
  },
  methods: {
    xCoord(x: number) {
      return this.xOrigin + x * this.xCoordScale
    },
    yCoord(y: number) {
      return this.yOrigin - y * this.yCoordScale
    },
    resize() {
      const { canvas } = this.$refs
      const { clientWidth, clientHeight } = canvas.parentNode as HTMLDivElement
      const width = clientWidth * 2
      const height = clientHeight * 2
      canvas.width = width
      canvas.height = height
      canvas.style.width = `${clientWidth}`
      canvas.style.height = `${clientHeight}px`
      this.canvasWidth = width
      this.canvasHeight = height
      this.draw()
    },
    drawGuides(ctx: CanvasRenderingContext2D) {
      const { canvasWidth, canvasHeight } = this
      ctx.setLineDash([5, 5])
      ctx.lineWidth = 1

      ctx.strokeStyle = '#555'
      const coord = min(SPAN_HORIZ, this.spanVert)
      ctx.beginPath()
      ctx.moveTo(this.xCoord(-coord), this.yCoord(-coord))
      ctx.lineTo(this.xCoord(coord), this.yCoord(coord))
      ctx.stroke()

      const x = this.xCoord(this.a12)
      const y = this.yCoord(this.a12)

      // Horizontal
      ctx.strokeStyle = '#faa'
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvasWidth, y)
      ctx.stroke()

      // Vertical
      ctx.strokeStyle = '#aaf'
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvasHeight)
      ctx.stroke()

      ctx.setLineDash([])
    },
    drawMatrix(ctx: CanvasRenderingContext2D) {
      ctx.lineWidth = 3

      // Drawing (a11, a12)
      drawVectorToPoint(ctx, 'red', this.coefs.a11, this.coefs.a12, 10, this)
      // Drawing (a12, a22)
      drawVectorToPoint(ctx, 'blue', this.coefs.a12, this.coefs.a22, 10, this)

      // Completing the parallelogram
      ctx.beginPath()
      ctx.setLineDash([5, 5])
      ctx.strokeStyle = '#aaa'
      ctx.moveTo(this.xCoord(this.coefs.a11), this.yCoord(this.coefs.a12))
      ctx.lineTo(this.xCoord(this.xMatrix), this.yCoord(this.yMatrix))
      ctx.lineTo(this.xCoord(this.coefs.a12), this.yCoord(this.coefs.a22))
      ctx.stroke()
      ctx.setLineDash([])
    },
    draw() {
      const ctx = this.$refs.canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        drawGrid(ctx, {
          canvasHeight: this.canvasHeight,
          canvasWidth: this.canvasWidth,
          xOriginRatio: 0.5,
          yOriginRatio: 0.5,
          unitsSize: this.unitsSize,
          spanHoriz: SPAN_HORIZ,
          spanVert: this.spanVert,
        })
        this.drawGuides(ctx)
        this.drawMatrix(ctx)

        drawPoint(ctx, '#aaa', this.coefs.a12, this.coefs.a12, 10, this)
        drawPoint(ctx, '#aaa', this.xMatrix, this.yMatrix, 10, this)
      }
    },

    isAboveA12(x: number, y: number) {
      return (
        abs(x - this.xCoord(this.a12)) < 10 &&
        abs(y - this.yCoord(this.a12)) < 10
      )
    },
    isAboveMatrix(x: number, y: number) {
      return (
        abs(x - this.xCoord(this.xMatrix)) < 10 &&
        abs(y - this.yCoord(this.yMatrix)) < 10
      )
    },
    isAboveFirst(x: number, y: number) {
      return (
        abs(x - this.xCoord(this.coefs.a11)) < 10 &&
        abs(y - this.yCoord(this.coefs.a12)) < 10
      )
    },
    isAboveSecond(x: number, y: number) {
      return (
        abs(x - this.xCoord(this.coefs.a12)) < 10 &&
        abs(y - this.yCoord(this.coefs.a22)) < 10
      )
    },

    mouseDown(e: MouseEvent) {
      const x = e.offsetX * 2
      const y = e.offsetY * 2
      if (this.isAboveA12(x, y)) {
        this.moving = 'a12'
      } else if (this.isAboveMatrix(x, y)) {
        this.moving = 'matrix'
      } else if (this.isAboveFirst(x, y)) {
        this.moving = 'first'
      } else if (this.isAboveSecond(x, y)) {
        this.moving = 'second'
      }
    },
    mouseMove(e: MouseEvent) {
      const x = e.offsetX * 2
      const y = e.offsetY * 2

      if (!this.moving) {
        if (
          this.isAboveA12(x, y) ||
          this.isAboveMatrix(x, y) ||
          this.isAboveFirst(x, y) ||
          this.isAboveSecond(x, y)
        ) {
          this.abovePoint = true
        } else {
          this.abovePoint = false
        }
      } else {
        let xCoord = (x - this.xOrigin) / this.xCoordScale

        if (this.moving === 'a12') {
          if (abs(round(xCoord) - xCoord) < 0.2) {
            xCoord = round(xCoord)
          }

          this.$store.dispatch('setA12', xCoord)
        } else {
          let yCoord = (this.yOrigin - y) / this.yCoordScale

          if (
            abs(round(xCoord) - xCoord) < 0.2 &&
            abs(round(yCoord) - yCoord) < 0.2
          ) {
            xCoord = round(xCoord)
            yCoord = round(yCoord)
          }

          if (this.moving === 'first') {
            this.$store.dispatch('setFirst', { a11: xCoord, a12: yCoord })
          } else if (this.moving === 'second') {
            this.$store.dispatch('setSecond', { a12: xCoord, a22: yCoord })
          } else {
            this.$store.dispatch('setMatrix', {
              a11: xCoord - this.a12,
              a22: yCoord - this.a12,
            })
          }
        }
        this.draw()
      }
    },
    mouseUp() {
      this.moving = false
    },
  },

  mounted() {
    this.resize()
    this.draw()
    window.addEventListener('resize', this.resize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resize)
  },
})
export default QuadraticFormEditor
</script>

<template>
  <div class="container">
    <canvas
      ref="canvas"
      width="0"
      height="0"
      class="canvas"
      :class="{ ready: abovePoint }"
      @mousedown="mouseDown"
      @mousemove="mouseMove"
      @mouseup="mouseUp"
    />
  </div>
</template>

<style scoped>
.container {
  overflow: hidden;
  position: relative;
}
.canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.ready {
  cursor: grab;
}
.ready:active {
  cursor: grabbing;
}
</style>
