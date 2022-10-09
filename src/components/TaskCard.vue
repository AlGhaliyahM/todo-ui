<script lang="ts" setup>
import TaskItem from './TaskItem.vue';
import { useTodoStore } from '../stores/todo';

//initiate the store
const todoStore = useTodoStore();
</script>
<template>
  <div class="todoList">
    <!-- to access the store use todoStore.$state.todos  -->

    <h2
      style="text-align: center; margin-top: 200px"
      v-if="todoStore.$state.todos.length == 0"
    >
      NO TODOS
    </h2>
    <TaskItem
      v-for="todo in todoStore.$state.todos"
      :key="todo.id"
      :id="todo.id"
      :Name="todo.task"
      :is_done="todo.is_done"
    />
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
