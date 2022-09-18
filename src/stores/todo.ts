import { defineStore } from 'pinia';
import { APISettings } from '../api/config';

export const useTodoStore = defineStore('todo', {
  //id: 'todo',
  state: () => ({
    todos: [] as any[],
    test: 1,
  }),
  getters: {
    getTodos: (state) => state.todos,
    getTest: (state) => state.test,
  },
  actions: {
    async fetchTask() {
      await fetch(APISettings.baseURL + '/todo/', {
        method: 'GET',
        headers: APISettings.headers,
      })
        .then((res) => res.json())
        .then((data) => {
          this.todos = data;
          console.log('this is in the store', this.todos);
        })
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
