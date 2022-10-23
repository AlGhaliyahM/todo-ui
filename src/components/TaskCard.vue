<script lang="ts" setup>
// import TaskItem from './TaskItem.vue';
import { useTodoStore } from '../stores/todo';

//initiate the store
const todoStore = useTodoStore();
</script>
<template>
  <div
    class="card todoContainer"
    style="border-radius: 15px; background-color: #395b64"
  >
    <h6 class="mb-6 boxTitle">My Todos</h6>

    <div class="card-body p-3 overflow-scroll">
      <ul class="list-group mb-0" v-if="todoStore.getTodoLength === 0">
        No Todos
      </ul>
      <ul
        class="list-group mb-0"
        v-if="todoStore.getTodoLength !== 0"
        style="border-radius: 15px"
      >
        <TaskItem
          v-for="todo in todoStore.getTodos"
          :key="todo.id"
          :id="todo.id"
          :name="todo.task"
          :is_done="todo.is_done"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.todoList {
  margin: 20px 0;
}
.check {
  margin-right: 1rem;
}
</style>
