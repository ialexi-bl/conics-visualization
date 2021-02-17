<script lang="ts">
import { defineComponent } from 'vue'

const Matrix = defineComponent({
  props: {
    m11: Number,
    m12: Number,
    m21: Number,
    m22: Number,
    isVector: Boolean,
  },
})
export default Matrix
</script>

<template>
  <div class="matrix-display-container">
    <span class="parenthesis left">(</span>
    <div class="matrix">
      <div class="component stix-font-small">{{ m11 }}</div>
      <div class="component stix-font-small">{{ m12 }}</div>
      <template v-if="!isVector">
        <div class="component stix-font-small">{{ m21 }}</div>
        <div class="component stix-font-small">{{ m22 }}</div>
      </template>
    </div>
    <span class="parenthesis right stix-font-small">)</span>
  </div>
</template>

<style scoped>
.matrix-display-container {
  display: flex;
  align-items: center;
}
.matrix {
  display: grid;
  gap: 0.2em 0.5em;
  font-size: 1.2em;
  grid: 1fr 1fr / 1fr 1fr;
  padding-bottom: 0.25em;
}
.component {
  width: 1.5em;
}
.parenthesis {
  font-size: 2.5em;
  font-weight: 100;
  font-family: Courier;
}
.parenthesis.left {
  transform: scaleY(1.6) translate(-15%);
}
.parenthesis.right {
  transform: scaleY(1.5) translate(15%);
}
</style>
