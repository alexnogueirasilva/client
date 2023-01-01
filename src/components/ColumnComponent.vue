<template>
<div class="column">
  <h3> {{ column.name }} <span class="estimative">{{ column.getEstimative() }}</span> </h3>
  <div v-for="card in column.cards">
    <CardComponent :board="board" :column="column" :card="card"></CardComponent>
  </div>
</div>
</template>

<script setup="ts">
import CardComponent from "./CardComponent.vue";

defineProps(["board", "column"]);

</script>

<style scoped>

.column {
  //width: 50%;
  text-align: center;
  background-color: #cccccc;
  margin-right: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

</style>
