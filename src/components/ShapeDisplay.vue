<script lang="ts">
import { defineComponent } from 'vue'

const ShapeDisplay = defineComponent({
  computed: {
    coefs() {
      return this.$store.state.coefs
    },
    determinant(): number {
      const { a11, a12, a22 } = this.coefs
      return a11 * a22 - a12 * a12
    },
    bigDeterminant(): number {
      const { a11, a12, a22, a13, a23, a33 } = this.coefs
      return (
        (a13 * (a12 * a23 - a22 * a13)) / 4 -
        (a23 * (a11 * a23 - a12 * a13)) / 2 +
        a33 * this.determinant
      )
    },
    lineType(): number {
      const { a11, a22, a13, a23, a33 } = this.coefs
      return (a13 * a13) / 4 + (a23 * a23) / 4 - (a11 + a22) * a33
    },
    isOneLine(): boolean {
      const { a11, a12, a22, a13, a23 } = this.coefs
      return a11 === 0 && a12 === 0 && a22 === 0 && (a13 !== 0 || a23 !== 0)
    },
    shape(): string {
      const { determinant } = this

      if (this.bigDeterminant === 0) {
        if (determinant < 0) return 'Two crossing lines'
        if (determinant > 0) return 'Point'
        if (this.isOneLine) return 'Line'

        const { lineType } = this
        if (lineType > 0) return 'Two parallel lines'
        if (lineType === 0) return 'Line'
        return 'Empty set'
      } else {
        if (determinant > 0) {
          if (this.coefs.a11 === this.coefs.a22 && this.coefs.a12 === 0) {
            return 'Circle'
          }
          return 'Ellipse'
        }
        if (determinant === 0) return 'Parabola'
        return 'Hyperbola'
      }
    },
  },
})
export default ShapeDisplay
</script>

<template>
  <div class="shape-display">{{ shape }}</div>
</template>

<style scoped>
.shape-display {
  text-align: center;
  color: white;
  padding: 0 1rem;
  margin-bottom: 2rem;
}

@media (max-width: 480px) {
  .shape-display {
    font-size: 0.8em;
    margin-bottom: 1rem;
  }
}
</style>
