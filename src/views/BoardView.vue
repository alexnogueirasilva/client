<script setup lang="ts">
import {inject, onMounted, reactive, ref} from "vue";
import Board from "../entities/Board";
import BoardService from "../services/BoardService";
import BoardComponent from "../components/BoardComponent.vue";
import DomainEvents from "../events/DomainEvents";

const data: { board: Board | undefined } = reactive({ board: undefined });

onMounted(async () => {
  const boardService = inject("boardService") as BoardService;
  const board = await boardService.getBoard(1);
  board.on("addColumn", async function (event: DomainEvents) {
    await boardService.saveColumn(event.payload);
  });
  data.board = board;
})
</script>

<template>
 <BoardComponent :board="data.board"></BoardComponent>
</template>

<style scoped>
</style>
