<script lang="ts">
//import { useRouter } from 'vue-router';
import { APISettings } from '../api/config';
import TaskItem from './TaskItem.vue';

export default {
  data() {
    return {
      todos: null,
    };
  },
  created() {
    fetch(APISettings.baseURL + '/todo/', {
      method: 'GET',
      headers: APISettings.headers,
    })
      .then((res) => res.json())
      .then((data) => (this.todos = data))
      .catch((err) => console.log(err.message));
  },
  components: { TaskItem },
};
</script>
<template>
  <div class="card w-100 text-white bg-secondary">
    <div class="card-body d-flex p-2" style="width: 50rem; height: 35rem">
      <form>
        <input
          type="text"
          class="form-control add-task"
          style="width: 45rem; margin-left: 2rem; margin-top: 2rem"
          placeholder="New Task..."
        />
        <div class="todoList">
          {{ todos }}
          <!-- is done will be set by the object from the json file we get from api e.g. task.is_done-->
          <TaskItem Name="test task 1" :is_done="false" />

          <TaskItem Name="test task 2" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.todoList {
  margin: 25px 0;
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
