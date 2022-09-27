<script lang="ts">
import TaskItem from './TaskItem.vue';
import { useTodoStore } from '../stores/todo';
import { ref } from 'vue';
import { APISettings } from '../api/config';
import { reactive, onMounted } from 'vue';

export default {
  setup() {

    const data = reactive({
      task: '',
    });

    const todoStore = useTodoStore();
    const todos = ref(todoStore.fetchTask());
    console.log('this is in the task card:', todos);

  //   const postTask = async () => {
  //     console.log("in post ")
  //     console.log(data)
  //   fetch(APISettings.baseURL + '/todo/', {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: APISettings.headers,
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => {
  //       if (response.status != 200) {
  //         throw response.status;
  //       } else {
  //           console.log(data)
  //         return response.json();
  //       }
  //     })
  //     .then(() => {
  //       console.log(data)
  //       // console.log(this.todos);
  //     })
  //     .catch((err) => console.log(err.message));
  // }
    
    return {
      todos,
      todoStore,
      data,
      //postTask,
    };
  },

  async mounted() {
    fetch(APISettings.baseURL + '/todo/', {
      method: 'GET',
      credentials: 'include',
      headers: APISettings.headers,
    })
      .then((response) => {
        if (response.status != 200) {
          throw response.status;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.todos = data;
        // console.log(this.todos);
      })
      .catch((err) => console.log(err.message));
    },
 
  components: { TaskItem },
};
</script>
<template>
  <div class="card w-100 text-white bg-secondary">
    <div class="card-body d-flex p-2" style="width: 50rem;">
      <div>

  <form >
 
    <div >
      <input
          type="text"
          class="form-control add-task"
          style="width: 45rem;height: 3.5rem ;margin-left: 2rem; margin-top: 2rem"
          placeholder="New Task..."
          v-model="data.task"
        />
        <!-- {{data.task}} -->
        <button 
         v-on:click="postTask()"
         class="btn btn-dark"
         style="margin-left: 40.5rem; margin-top: -5rem"
        > 
        Add Task 
      </button>
      </div>

        <div class="todoList">
          <TaskItem
            v-for="todo in todos"
            :key="todo.id"
            :id="todo.id"
            :Name="todo.task"
            :is_done="todo.is_done"
          />
          <!-- <TaskItem Name="test task 2" :is_done="true" /> -->
        </div>
   </form>
  </div>
   
    </div>
  </div>
</template>

<style scoped>
.todoList {
  margin: 20px 0;

}
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
</style>
