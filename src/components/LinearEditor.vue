<script lang="ts">
import { withOwnFields } from '@/types'
import drawGrid from '@/util/grid'
import { fit } from '@/util/math'
import round from '@/util/round'
import { drawVectorToPoint } from '@/util/vector'
import { defineComponent } from 'vue'

const { abs } = Math
const SPAN_HORIZ = 12

const LinearEditor = defineComponent({
  data() {
    return withOwnFields({
      canvasHeight: 0,
      canvasWidth: 0,
      abovePoint: false,
      moving: false,
    })<{
      $refs: { canvas: HTMLCanvasElement }
    }>()
  },
  computed: {
    coefs() {
      return this.$store.state.coefs
    },
    spanVert(): number {
      return (SPAN_HORIZ / this.canvasWidth) * this.canvasHeight
    },
    unitsSize(): number {
      return this.canvasWidth / SPAN_HORIZ / 2.5
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
    xValue(): number {
      return this.coefs.a13
    },
    yValue(): number {
      return this.coefs.a23
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
    draw() {
      const ctx = this.$refs.canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        drawGrid(ctx, {
          canvasHeight: this.canvasHeight,
          canvasWidth: this.canvasWidth,
          xOriginRatio: 0.5,
          yOriginRatio: 0.5,
          spanHoriz: SPAN_HORIZ,
          spanVert: this.spanVert,
          unitsSize: this.unitsSize,
        })
        ctx.lineWidth = 3
        drawVectorToPoint(ctx, 'yellow', this.xValue, this.yValue, 10, this)
      }
    },

    isAbovePoint(x: number, y: number) {
      return (
        abs(x - this.xCoord(this.xValue)) < 10 &&
        abs(y - this.yCoord(this.yValue)) < 10
      )
    },

    grab(offsetX: number, offsetY: number) {
      if (this.isAbovePoint(offsetX * 2, offsetY * 2)) {
        this.moving = true
      }
    },
    move(offsetX: number, offsetY: number) {
      const x = offsetX * 2
      const y = offsetY * 2

      let xCoord = (x - this.xOrigin) / this.xCoordScale
      let yCoord = (this.yOrigin - y) / this.yCoordScale
      if (
        abs(round(xCoord) - xCoord) < 0.2 &&
        abs(round(yCoord) - yCoord) < 0.2
      ) {
        xCoord = round(xCoord)
        yCoord = round(yCoord)
      }
      this.$store.dispatch('setLinearCoefs', { x: xCoord, y: yCoord })
      this.draw()
    },
    release() {
      this.moving = false
    },
    mouseDown(e: MouseEvent) {
      this.grab(e.offsetX, e.offsetY)
    },
    mouseMove(e: MouseEvent) {
      if (!this.moving) {
        if (this.isAbovePoint(e.offsetX * 2, e.offsetY * 2)) {
          this.abovePoint = true
        } else {
          this.abovePoint = false
        }
      } else {
        this.move(e.offsetX, e.offsetY)
      }
    },
    touchMove(e: TouchEvent) {
      if (e.touches.length !== 1) return
      const [touch] = e.touches
      e.preventDefault()

      const { left, top } = this.$refs.canvas.getBoundingClientRect()
      const { clientWidth, clientHeight } = this.$refs.canvas
      this.move(
        fit(touch.clientX - left, 0, clientWidth),
        fit(touch.clientY - top, 0, clientHeight),
      )
    },
  },
  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resize)
  },
})
export default LinearEditor
</script>

<template>
  <div class="container">
    <canvas
      ref="canvas"
      class="canvas"
      width="0"
      height="0"
      :class="{ ready: abovePoint }"
      @mousedown="mouseDown"
      @mousemove="mouseMove"
      @mouseup="release"
      @touchmove="touchMove"
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
