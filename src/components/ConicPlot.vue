<script lang="ts">
import { getConicPath } from '@/util/conic'
import drawGrid from '@/util/grid'
import { defineComponent } from 'vue'

const ConicPlot = defineComponent({
  animation: 0,
  data: () =>
    ({} as {
      animation: number
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
        // const s = performance.now()
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
        // console.log(
        //   (Math.round((performance.now() - s) * 1000) / 1000 + '').padEnd(
        //     5,
        //     '0',
        //   ),
        // )
      }

      this.animation = requestAnimationFrame(this.draw)
    },
    scale(e: WheelEvent) {
      e.preventDefault()
      this.$store.commit('scale', e.deltaY / 1000 + 1)
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
  <canvas ref="canvas" class="conic-plot" @wheel="scale" />
</template>

<style scoped>
.conic-plot {
  width: 100%;
  height: 100%;
}
</style>
