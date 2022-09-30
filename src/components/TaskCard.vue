<script lang="ts" setup>
import TaskItem from './TaskItem.vue';
import { useTodoStore } from '../stores/todo';
import { ref } from 'vue';
import { APISettings } from '../api/config';

const todoStore = useTodoStore();
todoStore.fetchTask();
</script>
<template>
  <div class="card w-100 text-white bg-secondary">
    <div class="card-body d-flex p-2" style="width: 50rem">
      <form>
        <input
          type="text"
          class="form-control add-task"
          style="width: 45rem; margin-left: 2rem; margin-top: 2rem"
          placeholder="New Task..."
        />
        <div class="todoList">
          <TaskItem
            v-for="todo in todoStore.$state.todos"
            :key="todo.id"
            :id="todo.id"
            :Name="todo.task"
            :is_done="todo.is_done"
          />
          <!-- <TaskItem Name="test task 2" :is_done="true" /> -->
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.todoList {
  margin: 25px 0;
}
.check {
  margin-right: 1rem;
}

.todoItem {
  background-color: rgb(245, 246, 245);
  width: 45rem;
  height: 3.5rem;
  padding: 15px;
  margin: 5px 0;
  margin-left: 2rem;
}
</style>
