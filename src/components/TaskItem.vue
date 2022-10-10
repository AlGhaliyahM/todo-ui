<script setup lang="ts">
import { useTodoStore } from '../stores/todo';
import { ref } from 'vue';
//initiate the store
const todoStore = useTodoStore();

const props = defineProps({
  id: Number,
  Name: String,
  is_done: Boolean ?? false,
});
// console.log(props.Name);

function changeState() {
  todoStore.updateTask(props.id);
}
</script>

<template>
  <div class="todoItem">
    <div v-if="props.is_done == false">
      <input class="check" type="checkbox" v-on:change="changeState()" />
      <label style="color: black">
        {{ props.Name }}
      </label>
      <button
        type="submit"
        class="btn btn-dark"
        style="margin-left: 34rem; margin-top: -4rem"
        v-on:click="todoStore.deleteTask(props.id)"
      >
        Delete
      </button>
    </div>

    <div v-if="props.is_done == true">
      <input
        class="check"
        type="checkbox"
        v-on:change="changeState()"
        checked
      />
      <label style="color: black">
        {{ props.Name }}
      </label>
      <button
        type="submit"
        class="btn btn-dark"
        style="margin-left: 34rem; margin-top: -4rem"
        v-on:click="todoStore.deleteTask(props.id)"
      >
        Delete
      </button>
    </div>
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
  border-radius: 10px;
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
</style>
