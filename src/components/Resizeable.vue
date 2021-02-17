<script lang="ts">
import { defineComponent } from 'vue'

const Resizeable = defineComponent({
  data() {
    return {
      width: this.initialWidth,
    }
  },
  props: {
    initialWidth: {
      type: Number,
      required: true,
    },
  },
})
export default Resizeable
</script>

<template>
  <div class="container">
    <div class="resizeable" :style="{ width: width + 'px' }">
      <div class="resizeable-content">
        <slot name="resizeable"></slot>
      </div>
      <div class="handle-bar">
        <div class="handle"></div>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
.resizeable {
  display: flex;
  height: 100%;
  background: #111;
}
.resizeable-content {
  flex: 1;
}

.handle-bar {
  height: 100%;
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ew-resize;
  background: #070707;
}
.handle {
  width: 1.5px;
  height: 30px;
  background: #777;
}

.content {
  flex: 1;
}
</style>
