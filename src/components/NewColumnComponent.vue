<template>
  <div class="new-column">
    <input class="new-column-input" type="text" v-model="columnName">
    <button class="new-column-add" v-on:click="board?.addColumn(columnName, true)">add</button>
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
