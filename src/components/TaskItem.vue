<script setup lang="ts">
import { useTodoStore } from '../stores/todo';
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
// function checked() {
//   const checked_green = document.getElementById('check' + id);
//   checked_green.classList.toggle('green');
//   const strike_unstrike = document.getElementById('strike' + id);
//   strike_unstrike.classList.toggle('strike_none');
// }
</script>

<template>
  <div v-if="props.is_done == false">
    <li class="mt-4">
      <div class="flex gap-1">
        <div
          class="w-5/6 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3"
        >
          <span
            id="check"
            class="w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
            v-on:click="changeState()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </span>
          <p class="ml-4 text-[#5b7a9d] font-semibold">
            {{ props.name }}
          </p>
        </div>
        <span
          class="w-1/6 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center"
          v-on:click="todoStore.deleteTask(props.id || -1)"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </li>
  </div>

  <div v-if="props.is_done == true">
    <li class="mt-4">
      <div class="flex gap-1">
        <div
          class="w-5/6 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3"
        >
          <span
            id="check"
            class="green w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center"
            v-on:click="changeState()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </span>
          <p class="ml-4 text-[#5b7a9d] font-semibold line-through">
            {{ props.name }}
          </p>
        </div>
        <span
          class="w-1/6 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center"
          v-on:click="todoStore.deleteTask(props.id || -1)"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </li>
  </div>

  <!-- <div v-if="props.is_done == false">
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
  </div> -->

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
.strike_none {
  text-decoration: none;
}
.green {
  background-color: green !important;
}
</style>
