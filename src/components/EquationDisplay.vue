<script lang="ts">
import { defineComponent } from 'vue'

const EquationDisplay = defineComponent({
  computed: {
    equation(): string {
      const coefs = this.$store.state.coefs
      let equation =
        this.format(coefs.a11, 'x²') +
        this.format(2 * coefs.a12, 'xy') +
        this.format(coefs.a22, 'y²') +
        this.format(coefs.a13, 'x') +
        this.format(coefs.a23, 'y') +
        this.format(coefs.a33, '', true)
      equation = equation.replace(/\+/g, ' + ').replace(/–/g, ' – ') + ' = 0'
      return equation.startsWith(' + ') ? equation.slice(3) : equation
    },
  },
  methods: {
    format(n: number, term: string, isFree = false) {
      n = Math.round(n * 100) / 100
      if (n == 0) return ''
      if (n == 1 && !isFree) return '+' + term
      if (n == -1 && !isFree) return '–' + term
      if (n > 0) return '+' + n + term
      return '–' + -n + term
    },
    formatCopy(e: ClipboardEvent) {
      const selection = document.getSelection()
      if (!selection) return

      e.clipboardData?.setData(
        'text/plain',
        selection
          .toString()
          .replace(/–/g, '-')
          .replace(/\s/g, ''),
      )
      e.preventDefault()
    },
  },
})
export default EquationDisplay
</script>

<template>
  <div class="equation-display stix-font-small" @copy="formatCopy">
    {{ equation }}
  </div>
</template>

<style scoped>
.equation-display {
  color: #ddd;
  font-size: 1.4rem;
  margin: 1rem 0;
  font-family: stix-two-text, Georgia, 'Times New Roman', Times, serif;
}
@media (max-width: 1040px) {
  .equation-display {
    font-size: 1rem;
  }
}
</style>
