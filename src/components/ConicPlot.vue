<script lang="ts">
import { getConicPath } from '@/util/conic'
import drawGrid from '@/util/grid'
import { defineComponent } from 'vue'

const ConicPlot = defineComponent({
  animation: 0,
  previousTouches: null,
  data: () =>
    ({} as {
      animation: number
      previousDist: number | null
      $refs: { canvas: HTMLCanvasElement }
    }),

  computed: {
    path(): Path2D {
      const { coefs, dimensions: d } = this.$store.state

      return getConicPath(coefs, {
        ...d,
        spanVert: this.$store.getters.spanVert,
        xOrigin: d.canvasWidth * d.xOriginRatio,
        yOrigin: d.canvasHeight * d.yOriginRatio,
        resolution: d.canvasWidth * d.resolutionRatio,
        unitsSize: this.$store.getters.unitsSize,
      })
    },
    canvasWidth(): number {
      return this.$store.state.dimensions.canvasWidth
    },
    canvasHeight(): number {
      return this.$store.state.dimensions.canvasHeight
    },
  },

  methods: {
    resize() {
      const { canvas } = this.$refs
      if (canvas) {
        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight
        this.$store.commit('setDimensions', {
          width: canvas.clientWidth,
          height: canvas.clientHeight,
        })
      }
    },
    draw() {
      const { canvas } = this.$refs
      const ctx = canvas.getContext('2d')

      if (ctx) {
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

        drawGrid(ctx, {
          ...this.$store.state.dimensions,
          spanVert: this.$store.getters.spanVert,
          unitsSize: this.$store.getters.unitsSize,
        })

        ctx.beginPath()
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 3
        ctx.stroke(this.path)
      }

      this.animation = requestAnimationFrame(this.draw)
    },
    distance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    },
    onWheel(e: WheelEvent) {
      e.preventDefault()
      console.log(e.deltaY)
      this.$store.commit('scale', e.deltaY / 1000 + 1)
    },
    onTouchOrMove(e: TouchEvent) {
      if (e.touches.length !== 2) return
      e.preventDefault()

      const [t1, t2] = e.touches
      const distance = this.distance(
        t1.clientX,
        t1.clientY,
        t2.clientX,
        t2.clientY,
      )
      if (this.previousDist === null) {
        this.previousDist = distance
      } else {
        this.$store.commit('scale', (distance - this.previousDist) / 200 + 1)
      }
    },
    ontouchend() {
      this.previousDist = null
    },
  },

  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
    this.animation = requestAnimationFrame(this.draw)
  },
  beforeUnmount() {
    cancelAnimationFrame(this.animation)
    window.removeEventListener('resize', this.resize)
  },
})
export default ConicPlot
</script>

<template>
  <canvas ref="canvas" class="conic-plot" @wheel="onWheel" />
</template>

<style scoped>
.conic-plot {
  width: 100%;
  height: 100%;
}
</style>
