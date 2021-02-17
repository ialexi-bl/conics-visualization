<script lang="ts">
import round from '@/util/round'
import { defineComponent } from 'vue'
import Matrix from './Matrix.vue'

const MatrixDisplay = defineComponent({
  components: { Matrix },
  computed: {
    coefs() {
      return this.$store.state.coefs
    },
    exactDeterminant(): number {
      const { a11, a12, a22 } = this.coefs
      return a11 * a22 - a12 * a12
    },
    determinant(): number {
      return round(this.exactDeterminant, 2)
    },
    equalsSign(): string {
      return this.determinant == this.exactDeterminant ? '=' : '≈'
    },
  },
  methods: {
    round(coef: number) {
      return round(coef, 2)
    },
  },
})
export default MatrixDisplay
</script>

<template>
  <div class="matrix-container">
    <span class="determinant">det</span>
    <Matrix
      :m11="round(coefs.a11)"
      :m12="round(coefs.a12)"
      :m21="round(coefs.a12)"
      :m22="round(coefs.a22)"
    />
    <span class="equals stix-font-small">{{ equalsSign }}</span>
    <span class="result stix-font-small">{{ determinant }}</span>
  </div>
</template>

<style scoped>
.matrix-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  color: #ddd;
  font-size: 1.2em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 1rem;
}
.determinant {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.result {
  width: 2em;
}
.equals {
  margin-left: 0.2em;
  margin-right: 0.5em;
}
.result {
  font-size: 1.2em;
}

@media (max-width: 1040px) {
  .matrix-container {
    font-size: 1rem;
  }
}
@media (max-width: 480px) {
  .matrix-container {
    display: none;
  }
}
</style>
