<script>
import axios from "axios";
export default {
  data() {
    return {
      board: {
        name: "Project A",
        columns: [
          {
            name: "Todo",
            cards: [
              { title: "A", estimative: 3},
              { title: "A", estimative: 3},
              { title: "A", estimative: 3}
            ]
          },
          {
            name: "In Progress",
            cards: []
          },
          {
            name: "Done",
            cards: []
          },
        ]
      },
      columnName: "",
    }
  },
  methods: {
    addColumn(columnName) {
      this.board.columns.push({
        name: columnName,
        cards: []
      });
      this.columnName = "";
    },

  },
  async mounted() {
   await axios.get("http://localhost:3000/boards/1")
      .then(response => {
        this.board = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<template>
  <h3>{{ board.name }}</h3>
  <div class="columns">
    <div class="column" v-for="column in board.columns">
     <h3> {{ column.name}} {{ column.estimative }}</h3>
      <div class="card" v-for="card in column.cards">
          {{ card.title }} {{ card.estimative }}
      </div>
    </div>
    <div class="column new-column">
      {{ columnName }}
      <input type="text" v-model="columnName">
      <button v-on:click="addColumn(columnName)" i>add</button>
    </div>
  </div>
</template>

<style scoped>
.columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.new-column{
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

.card{
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
</style>
