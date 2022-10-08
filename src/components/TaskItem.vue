<script setup lang="ts">
import { APISettings } from '../api/config';
import { useTodoStore } from '../stores/todo';

//initiate the store
const todoStore = useTodoStore();

const props = defineProps({
  id: Number,
  Name: String,
  is_done: Boolean ?? false,
});
// console.log(props.Name);

function changeState() {
  //this function should call the update funtion in the API
  //props.is_done = !props.is_done;
}
</script>

<template>
  <div class="todoItem">
    <input class="check" type="checkbox" v-on:change="changeState()" />
    <span v-bind:class="{ done: props.is_done }" style="color: black">
      {{ props.Name }}
    </span>

    <button
      type="submit"
      class="btn btn-dark"
      style="margin-left: 34rem; margin-top: -3rem"
      v-on:click="todoStore.deleteTask(props.id)"
    >
      Delete
    </button>
  </div>
</template>

<style>
.check {
  margin-right: 1rem;
}

.todoItem {
  background-color: #e8f1f4;
  width: 40rem;
  height: 3.5rem;
  padding: 15px;
  margin: 8px 0;
  margin-left: 2rem;
}
.done {
  text-decoration: line-through;
}
</style>
