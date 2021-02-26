<script lang="ts">
import { defineComponent } from 'vue'
import QuadraticFormEditor from './QuadraticFormEditor.vue'
import EquationDisplay from './EquationDisplay.vue'
import MatrixDisplay from './MatrixDisplay.vue'
import ShapeDisplay from './ShapeDisplay.vue'
import LinearEditor from './LinearEditor.vue'

const Sidebar = defineComponent({
  components: {
    EquationDisplay,
    QuadraticFormEditor,
    LinearEditor,
    MatrixDisplay,
    ShapeDisplay,
  },
})
export default Sidebar
</script>

<template>
  <aside class="sidebar">
    <EquationDisplay />
    <MatrixDisplay />
    <ShapeDisplay />
    <hr class="hr" />
    <div class="editors">
      <QuadraticFormEditor class="quadratic-editor" />
      <hr class="hr" />
      <LinearEditor class="linear-editor" />
    </div>
  </aside>
</template>
<style scoped>
.hr {
  border-color: #444;
}
.sidebar {
  height: 100%;
}
.editors {
  flex: 1;
}
.sidebar,
.editors {
  display: flex;
  flex-direction: column;
}
.quadratic-editor,
.linear-editor {
  width: 100%;
  flex: 1;
}
@media (max-width: 480px) {
  .hr {
    display: none;
  }
  .quadratic-editor {
    border-right: 1px solid #444;
  }
  .quadratic-editor + .hr {
    display: none;
  }
  .linear-editor {
    border-left: 1px solid #444;
  }
  .quadratic-editor,
  .linear-editor {
    border-top: 1px solid #444;
    width: 50%;
    height: 100%;
  }
  .editors {
    flex: 1;
    flex-direction: row;
    height: 50%;
    width: 100%;
  }
}
</style>
