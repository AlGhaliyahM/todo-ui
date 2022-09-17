<script setup lang="ts">
const props = defineProps({
  id: Number,
  Name: String,
  is_done: Boolean ?? false,
});
console.log(props.Name);

function changeState() {
  //this function should call the update funtion in the APIU
  //props.is_done = !props.is_done;
}
</script>
<template>
  <div class="todoItem">
    <input class="check" type="checkbox" v-on:change="changeState()" />
    <span v-bind:class="{ done: props.is_done }" style="color: black"
      >{{ props.Name }} : {{ props.id }}</span
    >
    <button
      type="button"
      class="btn btn-danger"
      style="margin-left: 39rem; margin-top: -3rem"
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
  background-color: rgb(245, 246, 245);
  width: 45rem;
  height: 3.5rem;
  padding: 15px;
  margin: 5px 0;
  margin-left: 2rem;
}
.done {
  text-decoration: line-through;
}
</style>
