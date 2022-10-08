import { defineStore } from 'pinia';
import { APISettings } from '../api/config';

//TODO: 'Check all the responses to be consistent and add alert message for : post, delete,update';

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [] as any[],
    completedTodos: 0,
    pendingTodos: 0,
  }),

  getters: {
    getTodos: (state) => state.todos,
    getCompletedTodos: (state) => state.completedTodos,
    getPendingTodos: (state) => state.pendingTodos,
  },

  actions: {
    async fetchTask() {
      await fetch(APISettings.baseURL + '/todo/', {
        credentials: 'include',
        method: 'GET',
        headers: APISettings.headers,
      })
        .then((res) => res.json())
        .then((data) => {
          this.todos = data;
          //console.log('this is in the store', this.todos);
        })
        .catch((err) => console.log(err.message));
      // return this.todo;
    },
    async deleteTask(ID: number) {
      fetch(APISettings.baseURL + '/todo/' + ID, {
        method: 'DELETE',
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
        .then(() => {
          console.log('task deleted' + ID);
          this.fetchTask();
          // console.log(this.todos);
        })
        .catch((err) => console.log(err.message));
    },
    //getID() {},
    //updateTask() {},
    async countTasks() {
      await fetch(APISettings.baseURL + '/todo/countTask', {
        credentials: 'include',
        method: 'GET',
        headers: APISettings.headers,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    },
    async postTask(newTask: string) {
      console.log(newTask);
      console.log('Inside POST');
      interface task {
        task: string;
      }

      const task: task = { task: newTask };
      console.log('====================================');
      console.log(task);
      console.log(JSON.stringify(task));
      console.log('====================================');
      await fetch(APISettings.baseURL + '/todo', {
        method: 'POST',
        headers: APISettings.headers,
        credentials: 'include', //to get the cookie
        body: JSON.stringify(task).toString(),
      })
        .then((res) => {
          console.log('The task Added :  ' + res);
        })
        .catch((err) => console.log(err.message));
    },
  },
});
