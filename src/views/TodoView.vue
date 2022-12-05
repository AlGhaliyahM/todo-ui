<script setup lang="ts">
import { useTodoStore } from '../stores/todo';
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import TaskCard from '@/components/TaskCard.vue';

const router = useRouter();

//routes the user to the login page if no cookie is set
const authStore = useAuthStore();

if (!authStore.getAuth) {
  router.push('/login');
}

//initiate the store
const todoStore = useTodoStore();

//store action
todoStore.getTask();

// todoStore.countTasks();
async function addTask(task: string) {
  if ((await todoStore.postTask(task)) || 1 > 299) this.task = '';
}

const task = ref('');
</script>

<template>
  <div
    class="flex flex-row flex-wrap justify-center items-start min-h-screen overflow-hidden overscroll-none bg-gray-100 pt-24"
  >
    <div class="container flex flex-col rounded-lg md:px-4 gap-8 md:w-1/3">
      <!-- Add container -->
      <div class="bg-white rounded-lg p-4 container px-4 min-h-[13rem]">
        <p class="text-xl font-semibold mt-2 text-cyan-700 items-center py-2">
          Add To-do
        </p>
        <form @submit.prevent="addTask(task)">
          <div class="flex gap-1">
            <input
              placeholder="To-do"
              v-model="task"
              class="w-4/5 h-12 rounded-[7px] flex border border-blue-100 justify-start items-center px-3 placeholder-gray-400 focus:z-10 focus:border-cyan-700 focus:outline-none focus:ring-cyan-700 sm:text-sm text-base text-[#5b7a9d]"
            /><!-- border border-gray-300 -->
            <span
              class="w-1/5 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center"
              ><button type="submit">Add</button>
            </span>
          </div>
        </form>
      </div>
      <!-- Completion Container -->
      <div
        class="place-items-center mb-4 bg-white rounded-lg p-4 container mx-auto px-4 min-h-[13rem] grid grid-cols-2 gap-2"
      >
        <!-- <div class="grid grid-cols-2 gap-2"> -->
        <span
          class="h-12 w-1/2 bg-amber-600 rounded-[7px] flex justify-center text-sm text-gray-900 font-semibold items-center"
          >{{ todoStore.getPendingTodos }}
        </span>
        <p
          class="text-sm text-center align-text-bottom font-semibold mt-2 text-cyan-700"
        >
          Pending To-Do
        </p>
        <span
          class="h-12 w-1/2 bg-[#5b7a9d] rounded-[7px] flex justify-center text-sm text-gray-100 font-semibold items-center"
          >{{ todoStore.getCompletedTodos }}
        </span>
        <p
          class="text-sm text-center align-text-bottom font-semibold mt-2 text-cyan-700"
        >
          Completed To-Do
        </p>
      </div>
    </div>
    <!-- TO-DO container -->
    <TaskCard />
  </div>
</template>
