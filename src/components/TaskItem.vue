<script setup lang="ts">
import { useTodoStore } from '../stores/todo';
import { ref } from 'vue';
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
      style="background-color: #adb5bd"
      class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded mb-2"
    >
      <div class="d-flex align-items-center">
        <input
          v-on:change="changeState()"
          class="form-check-input me-2"
          type="checkbox"
          value=""
          aria-label="..."
        />
        <label class="form-check-label">{{ props.name }}</label>
        <!-- {{ props.name }} -->
      </div>
      <a
        @click.prevent="todoStore.deleteTask(props.id || 0)"
        data-mdb-toggle="tooltip"
        title="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </a>
    </li>
  </div>

  <div v-if="props.is_done == true">
    <li
      style="background-color: #adb5bd"
      class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded mb-2"
    >
      <div class="d-flex align-items-center">
        <input
          v-on:change="changeState()"
          class="form-check-input me-2"
          type="checkbox"
          value=""
          aria-label="..."
          checked
        />
        <label class="form-check-label">{{ props.name }}</label>
        <!-- {{ props.name }} -->
      </div>
      <a
        @click.prevent="todoStore.deleteTask(props.id || 0)"
        data-mdb-toggle="tooltip"
        title="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </a>
    </li>
  </div>
</template>

<style>
.check {
  margin-right: 1rem;
}

.todoItem {
  margin: 7px;
  background-color: #adb5bd;
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
</style>
