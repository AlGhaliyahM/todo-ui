<script setup lang="ts">
import TaskCard from '../components/TaskCard.vue';
import { useTodoStore } from '../stores/todo';
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
const router = useRouter();

//routes the user to the login page if no cookie is set
//there is a problem if you reload the page the state is reset
const authStore = useAuthStore();

if (!authStore.$state.authenticated) {
  router.push('/login');
}

//initiate the store
const todoStore = useTodoStore();
//store action
todoStore.fetchTask();
todoStore.countTasks();

const task = ref('');
</script>
<template>
  <div class="todoContainer">
    <div class="columnContainer">
      <div class="addtodoContainer">
        <h6 class="boxTitle">Add Todo</h6>

        <form @submit.prevent="todoStore.postTask(task)">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            "
          >
            <input
              type="text"
              v-model="task"
              class="inputField"
              style="margin-top: 30px; width: 400px"
              placeholder="New Todo..."
            />

            <button class="addbtn" type="submit">Add Todo</button>
          </div>
        </form>
      </div>
      <div class="statusContainer">
        <!-- <h6 class="boxTitle">Status</h6> -->

        <div
          style="flex-direction: column; margin-top: 30px; margin-left: 20px"
        >
          <div style="display: flex; flex-direction: row; margin: 20px">
            <div class="box1">{{ todoStore.$state.completedTodos }}</div>
            <h6 class="statusText">Completed Todo</h6>
          </div>

          <div style="display: flex; flex-direction: row; margin: 20px">
            <div class="box2">{{ todoStore.$state.pendingTodos }}</div>
            <h6 class="statusText">Pending Todo</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="mytodosContainer" style="overflow-y: scroll">
      <h6 class="boxTitle">My Todos</h6>

      <TaskCard />
    </div>
  </div>
</template>
