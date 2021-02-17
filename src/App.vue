<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'
import ConicPlot from './components/ConicPlot.vue'

export default defineComponent({
  components: { Sidebar, ConicPlot },
  computed: {
    defaultSidebarWidth: () => Math.max(window.innerWidth * 0.45, 400),
  },
})
</script>

<template>
  <div class="container">
    <div class="sidebar-container">
      <div class="sidebar">
        <sidebar />
      </div>
      <div class="separator" />
    </div>
    <main class="content-container">
      <conic-plot />
    </main>
  </div>
</template>

<style>
html,
body,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background: black;
  color: #ddd;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.stix-font-small {
  line-height: 1;
  max-height: 2em;
  font-family: stix-two-text, Georgia, 'Times New Roman', Times, serif;
}
</style>
<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.sidebar-container {
  display: flex;
  height: 100%;
  background: #111;
  max-width: 35%;
}
.sidebar {
  flex: 1;
  width: 100%;
}
.separator {
  width: 12px;
  background: #070707;
}
.content-container {
  flex: 1;
}

@media (max-width: 480px) {
  .container {
    flex-direction: column-reverse;
  }
  .sidebar-container {
    flex-direction: column-reverse;
    max-height: 50%;
    max-width: 100%;
  }
  .separator {
    height: 12px;
    width: 100%;
  }
}
</style>
