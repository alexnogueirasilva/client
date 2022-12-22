<script setup lang="ts">
import axios from "axios";
import {computed, onMounted, reactive} from "vue";

let data: any = reactive({});

let columnName = "";
let cardTitle = "";

function addColumn(columnName: string) {
  data.board.columns.push({
    name: columnName,
    estimative: 0,
    cards: []
  });
}

function addCard(column: any, cardTitle: string) {
  column.cards.push({
    title: cardTitle,
    estimative: 0
  })
}

function incraseEstmative(column: any) {
  column.estimative++;
}

function decraseEstmative(column: any) {
  column.estimative--;
}

const boardEstimative = computed(() => {
 return data.board.columns.reduce((acc: number, column: any) => {
    acc += column.cards.reduce((acc: number, card: any) => {
      acc += card.estimative;
      return acc;
    }, 0);
    return acc;
 }, 0);
})

onMounted(async () => {
  const response = await axios({
    method: "GET",
    url: "http://localhost:3000/boards/1"
  });
 data.board = response.data;
})
</script>

<template>
  <div v-if="data.board">
  <h3>{{ data.board.name }} {{ boardEstimative }}</h3><br>
  <div class="columns">
    <div class="column" v-for="column in data.board.columns">
      <h3> {{ column.name }} {{ column.estimative }}</h3>
      <div class="card" v-for="card in column.cards">
        {{ card.title }} {{ card.estimative }}
        <br/>
        <button @click="incraseEstmative(card)">+</button>
        <button @click="decraseEstmative(card)">-</button>
      </div>
      <div class="card new-card">
        <input type="text" v-model="cardTitle">
        <button v-on:click="addCard(column, cardTitle)">add</button>
      </div>
    </div>
    <div class="column new-column">
      {{ columnName }}
      <input type="text" v-model="columnName">
      <button v-on:click="addColumn(columnName)">add</button>
    </div>
  </div>
  </div>
</template>

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
