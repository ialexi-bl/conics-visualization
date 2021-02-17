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
    shape(): string {
      const { determinant } = this
      if (determinant < 0) return 'Hyperbola'
      if (determinant > 0) {
        if (
          Math.sign(this.coefs.a11 + this.coefs.a12) ===
          Math.sign(this.bigDeterminant)
        )
          return 'Empty set'
        return 'Ellipse'
      }
      if (this.bigDeterminant !== 0) return 'Parabola'
      return 'Degenerate conic'
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
