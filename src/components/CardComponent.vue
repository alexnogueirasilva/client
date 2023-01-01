<template>
 <div class="card">
   <span class="card-title">{{ card.title }} </span> <span class="card-estimative">{{ card.estimative }}</span>
   <br/>
   <button class="card-estimative-increse" @click="board.incraseEstmative(card)">+</button>
   <button class="card-estimative-decrese" @click="board.decraseEstmative(card)">-</button>
 </div>
</template>

<script setup="ts">
defineProps(["board", "column", "card"]);

</script>

<style scoped>

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

</style>
