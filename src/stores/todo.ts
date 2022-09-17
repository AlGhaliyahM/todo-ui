import { defineStore } from 'pinia';
import { APISettings } from '../api/config';

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: null,
  }),
  getters: {},
  actions: {
    async getTask() {
      this.todos = await fetch(APISettings.baseURL + '/todo/', {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImVtYWlsIjoiVGVzdGluZ0VtYWlsQGdtYWlsLmNvbSIsIm5hbWUiOiJhem96IiwiaWF0IjoxNjYzNDE3NzM5LCJleHAiOjE2NjM0MTk1Mzl9.e9UCcMIbJFpYPpUGXPGgwXIe99ff0EfKXS088NN0DYk',
        },
      })
        .then((res) => res.json())
        .then((data) => (this.todos = data))
        .catch((err) => console.log(err.message));
      //return this.todo;
    },
    addTask() {
      //this.counter--;
    },
    //getID() {},
    //updateTask() {},
    //countTasks() {},
  },
});
