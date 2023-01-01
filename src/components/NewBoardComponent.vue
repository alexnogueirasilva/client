<template>
  <div class="new-card">
    <input type="text" v-model="cardTitle">
    <button v-on:click="board.addCard(column.name, cardTitle, 0)">add</button>
  </div>
</template>

<script setup="ts">
import {ref} from "vue";

defineProps(["board", "column"]);
let cardTitle = ref("");
</script>

<style scoped>
.new-card {
  background-color: #EEE;
  border: 1px dashed #CCC;
  display: block;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin-right: 5px;
  height: 80px;
  align-items: center;
  justify-content: space-around;
}
</style>
