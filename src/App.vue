<template>
  <GraphicEditor />
</template>

<script>
import GraphicEditor from "./components/GraphicEditor";

export default {
  name: "App",
  components: {
    GraphicEditor,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.green .vue-slider-dot-handle-focus,
.green .vue-slider-dot-handle {
  box-shadow: none;
  background-color: #25a95b;
}

.green .vue-slider-process {
  background-color: #25a95b;
}

.green .vue-slider-rail {
  background-color: #c8e9d6;
}

.blue .vue-slider-dot-handle-focus,
.blue .vue-slider-dot-handle {
  box-shadow: none;
  background-color: #4a90e2;
}

.blue .vue-slider-process {
  background-color: #4a90e2;
}

.blue .vue-slider-rail {
  background-color: #c8dbe9;
}

.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,
.vue-slider-dot-tooltip-show {
  visibility: hidden;
}
</style>
