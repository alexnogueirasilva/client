<template>
  <div v-if="board">
    <h3>{{ board.name }} <span id="estimative">{{ board.getEstimative() }}</span></h3><br>
    <div class="columns">
      <div class="column" v-for="column in board.columns">
        <h3> {{ column.name }} {{ column.getEstimative() }}</h3>
        <div class="card" v-for="card in column.cards">
          {{ card.title }} {{ card.estimative }}
          <br/>
          <button @click="board.incraseEstmative(card)">+</button>
          <button @click="board.decraseEstmative(card)">-</button>
        </div>
        <div class="card new-card">
          <input type="text" v-model="cardTitle">
          <button v-on:click="board.addCard(column.name, cardTitle, 0)">add</button>
        </div>
      </div>
      <div class="column new-column">
        {{ columnName }}
        <input type="text" v-model="columnName">
        <button v-on:click="board?.addColumn(columnName, true)">add</button>
      </div>
    </div>
  </div>
</template>

<script setup="ts">
import {ref} from "vue";

defineProps(["board"]);
let cardTitle = ref("");
let columnName = ref("");
</script>

<style scoped>
.columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.new-column {
  background-color: #EEE;
  board: 1px dashed #CCC;
  display: block;

}

.column {
  width: 30%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background-color: #cccccc;
  margin-right: 5px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background-color: #F3E779;
  margin-right: 5px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.new-card {
  background-color: #EEE;
  border: 1px dashed #CCC;
  display: block;
}
</style>
