<template>
  <div v-if="board">
    <h3>{{ board.name }} <span id="estimative">{{ board.getEstimative() }}</span></h3><br>
    <div class="columns">
      <div v-for="column in board.columns">
        <ColumnComponent :board="board" :column="column"></ColumnComponent>
        <NewBoardComponent :board="board" :column="column"></NewBoardComponent>
      </div>
      <NewColumnComponent :board="board"></NewColumnComponent>
    </div>
  </div>
</template>

<script setup="ts">

import ColumnComponent from "./ColumnComponent.vue";
import NewBoardComponent from "./NewBoardComponent.vue";
import NewColumnComponent from "./NewColumnComponent.vue";

defineProps(["board"]);

</script>

<style scoped>
.columns {
  display: flex;
  flex-direction: row;
}

</style>
