<script setup lang="ts">
import { useTodoStore } from '../stores/todo';
import IconDelete from './icons/IconDelete.vue';

import { useToast } from 'bootstrap-vue-3';
import type { hide } from '@popperjs/core';

const toast = useToast();

//initiate the store
const todoStore = useTodoStore();

const props = defineProps({
  id: Number,
  name: String,
  is_done: Boolean ?? false,
});
// console.log(props.Name);

async function changeState() {
  todoStore.updateTask(props.id || 0);
  //i believe the task background should change to indicate the change
  //with no notification
  // toast?.show(
  //   { title: props.name + ' Updated' },
  //   {
  //     pos: 'top-center',
  //     variant: 'light',
  //     delay: 1000,
  //   },
  // );
}
</script>

<template>
  <b-container :toast="{ root: true }" fluid="sm" position="position-static">
  </b-container>
  <div v-if="props.is_done == false">
    <li
      style="background-color: #e5f0f0"
      class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded mb-2"
    >
      <div class="d-flex align-items-center">
        <b-form-checkbox
          v-on:change="changeState()"
          class="form-check-input me-3"
          type="checkbox"
          value=""
          aria-label="..."
          style="margin-top: 0.6rem"
        >
          {{ props.name }}</b-form-checkbox
        >
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
        <b-form-checkbox
          v-on:change="changeState()"
          class="form-check-input me-3"
          type="checkbox"
          value=""
          aria-label="..."
          checked
          style="margin-top: 0.6rem"
          >{{ props.name }}</b-form-checkbox
        >
      </div>
      <button class="iconButton" @click="todoStore.deleteTask(props.id || -1)">
        <IconDelete />
      </button>
    </li>
  </div>

  <!-- <div>
    <b-modal id="modal-center" centered hide-footer hide-header>
      <div style="display: flex; justify-content: center; margin-top: 20px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width=""
          height="30"
          color="#E14A4A"
          fill="currentColor"
          class="bi bi-exclamation-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
          />
        </svg>
      </div>

      <p
        class="my-4"
        style="
          color: black;
          text-align: center;
          font-size: medium;
          color: #2d2e36;
          margin-top: 20px;
        "
      >
        Are you sure you want to delete this todo?
      </p>
      <div
        style="display: flex; justify-content: space-evenly; margin-top: 55px"
      >
        <b-button size="md" style="width: 150px" variant="outline-secondary">
          Cancel
        </b-button>
        <b-button
          style="width: 150px"
          size="md"
          variant="outline-danger"
          @click="todoStore.deleteTask(props.id || -1)"
        >
          Delete todo
        </b-button>
      </div>
    </b-modal>
  </div> -->
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
