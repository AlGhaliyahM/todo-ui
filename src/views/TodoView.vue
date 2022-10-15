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

if (!authStore.getAuth) {
  router.push('/login');
}

//initiate the store
const todoStore = useTodoStore();
//store action
todoStore.getTask();
// todoStore.countTasks();
function addTask(task: string) {
  todoStore.postTask(task);
  this.task = '';
}
const task = ref('');
</script>
<template>
  <div class="container py-5 h-100 px-4">
    <div class="row d-flex justify-content-center align-items-start h-100 g-4">
      <div class="col col-md-4" id="add todo card">
        <div
          class="card text-bg mb-3 addtodoContainer"
          style="border-radius: 15px; background-color: #395b64"
        >
          <div class="card-body p-3">
            <h6 class="mb-3 boxTitle">Add Todo</h6>

            <form
              class="d-flex justify-content-center align-items-center mb-4"
              @submit.prevent="addTask(task)"
            >
              <div class="form-outline flex-fill input-group">
                <input
                  id="add-task-input"
                  type="text"
                  v-model="task"
                  class="form-control form-control-lg"
                  style="background-color: #E7F6F2; color: #2d2e36"
                  placeholder="New Todo..."
                />
                <button
                  id="button-addon1"
                  type="submit"
                  class="addbtn btn btn-primary btn-lg ms-2"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="card text-bg mb-3 statusContainer"
          style="border-radius: 15px; background-color: #395b64"
        >
          <div class="card-body p-5">
            <div style="flex-direction: column">
              <div style="display: flex; flex-direction: row; margin: 10px">
                <div class="box1">{{ todoStore.getPendingTodos }}</div>
                <h6 class="statusText" style="color: black">Pending Todo</h6>
              </div>
              <div style="display: flex; flex-direction: row; margin: 10px">
                <div class="box2">{{ todoStore.getCompletedTodos }}</div>
                <h6 class="statusText" style="color: black">Completed Todo</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="todo list card " class="col col-md-6">
        <TaskCard />
      </div>
    </div>
  </div>
</template>
