<template>
  <div class="new-column">
    {{ columnName }}
    <input type="text" v-model="columnName">
    <button v-on:click="board?.addColumn(columnName, true)">add</button>
  </div>
</template>

<script setup="ts">
import {ref} from "vue";

defineProps(["board", "column"]);
let columnName = ref("");
</script>

<style scoped>

.new-column {
  border: 1px solid #ccc;
  background-color: #EEE;
  display: block;
}
</style>
