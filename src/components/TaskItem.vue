<script setup lang="ts">
import { useTodoStore } from '../stores/todo';
import IconDelete from './icons/IconDelete.vue';
//initiate the store
const todoStore = useTodoStore();

const props = defineProps({
  id: Number,
  name: String,
  is_done: Boolean ?? false,
});
// console.log(props.Name);

function changeState() {
  todoStore.updateTask(props.id || 0);
}
</script>

<template>
  <div v-if="props.is_done == false">
    <li
      style="background-color: #a5c9ca"
      class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded mb-2"
    >
      <div class="d-flex align-items-center">
        <input
          v-on:change="changeState()"
          class="form-check-input me-3"
          type="checkbox"
          value=""
          aria-label="..."
        />
        <label class="form-check-label" style="color: black">{{
          props.name
        }}</label>
        <!-- {{ props.name }} -->
      </div>
      <button class="iconButton" @click="todoStore.deleteTask(props.id || -1)">
        <IconDelete />
      </button>
    </li>
  </div>

  <div v-if="props.is_done == true">
    <li
      style="background-color: #a5c9ca"
      class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded mb-2"
    >
      <div class="d-flex align-items-center">
        <input
          v-on:change="changeState()"
          class="form-check-input me-3"
          type="checkbox"
          value=""
          aria-label="..."
          checked
        />
        <label class="form-check-label">{{ props.name }}</label>
        <!-- {{ props.name }} -->
      </div>
      <button class="iconButton" @click="todoStore.deleteTask(props.id || -1)">
        <IconDelete />
      </button>
    </li>
  </div>
</template>

<style>
.check {
  margin-right: 1rem;
}

.todoItem {
  margin: 7px;
  background-color: #0091b9;
  font-size: larger;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
.done label {
  text-decoration: line-through;
}

input[type='checkbox']:checked + label {
  color: black;
  text-decoration: line-through;
}
label {
  font-size: 20px;
}
.iconButton {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: none;
}
</style>
