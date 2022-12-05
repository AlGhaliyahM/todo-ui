<script lang="ts" setup>
// import TaskItem from './TaskItem.vue';
import { useTodoStore } from '../stores/todo';
import TaskItemVue from './TaskItem.vue';

//initiate the store
const todoStore = useTodoStore();
</script>
<template>
  <div
    class="container max-h-[28rem] flex flex-col md:w-1/2 rounded-lg p-4 gap-4 bg-white"
  >
    <p class="text-xl font-semibold mt-2 text-cyan-700">To-Do List</p>

    <ul class="my-1 overflow-y-auto" v-if="todoStore.getTodoLength != 0">
      <TaskItemVue
        v-for="todo in todoStore.getTodos"
        :key="todo.id"
        :id="todo.id"
        :name="todo.task"
        :is_done="todo.is_done"
      />
    </ul>
    <ul class="my-4" v-if="todoStore.getTodoLength == 0">
      <p class="text-base font-semibold ml-4 mt-2 text-cyan-700">No Todos</p>
    </ul>
  </div>
</template>
