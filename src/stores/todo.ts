import { defineStore } from 'pinia';
import { APISettings } from '../api/config';

//TODO: 'Check all the responses to be consistent and add alert message for : post, delete,update';
interface task {
  task: string;
  id: number;
  createdAt: Date;
  UpdatedAt: Date;
  is_done: boolean;
}
export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [] as any[],
    completedTodos: 0,
    pendingTodos: 0,
  }),

  getters: {
    getTodos(): any {
      return this.todos;
    },
    getCompletedTodos(): number {
      return this.todos.filter((x) => x.is_done === true).length;
    },
    getPendingTodos(): number {
      return this.todos.filter((x) => x.is_done !== true).length;
    },
    getTodoLength(): number {
      return this.todos.length;
    },
  },

  actions: {
    async getTask() {
      await fetch(APISettings.baseURL + 'todo/', {
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
      const trueFirst = this.todos.sort(
        (a, b) => Number(a.is_done) - Number(b.is_done),
      );
      this.todos = trueFirst;
    },
    async deleteTask(ID: number) {
      await fetch(APISettings.baseURL + 'todo/' + ID, {
        method: 'DELETE',
        credentials: 'include',
        headers: APISettings.headers,
      })
        .then((response) => {
          if (response.status === 200) {
            this.todos = this.todos.filter((todo) => todo.id !== ID);
            console.log('task deleted' + ID);
            return response.json();
          }
          throw response.status;
        })
        .catch((err) => {
          // this.getTask();
          // this.todos = this.todos.filter((todo) => todo.id !== ID);
          console.log(err.message);
        });
    },
    //getID() {},
    async updateTask(ID: number) {
      const index = this.todos.findIndex((todo) => {
        return todo.id === ID;
      });
      await fetch(APISettings.baseURL + 'todo/' + ID, {
        method: 'PUT',
        credentials: 'include',
        headers: APISettings.headers,
      })
        .then((res) => res.json())
        .then((data) => {
          this.todos[index] = data;
        })
        .catch((err) => console.log(err.message));

      const falseFirst = this.todos.sort(
        (a, b) => Number(a.is_done) - Number(b.is_done),
      );
      this.todos = falseFirst;
    },
    async countTasks() {
      await fetch(APISettings.baseURL + 'todo/countTask', {
        credentials: 'include',
        method: 'GET',
        headers: APISettings.headers,
      })
        .then((res) => res.json())
        .then((data) => {
          const { completedTasks, pendingTasks } = data;
          this.completedTodos = completedTasks;
          this.pendingTodos = pendingTasks;
          // console.log(data);
        })
        .catch((err) => console.log(err.message));
    },
    async postTask(newTask: string) {
      const task: task = {
        task: newTask,
      };

      await fetch(APISettings.baseURL + 'todo', {
        method: 'POST',
        headers: APISettings.headers,
        credentials: 'include', //to get the cookie
        body: JSON.stringify(task).toString(),
      })
        .then(() => {
          this.getTask();
        })
        .catch((err) => console.log(err.message));
    },
  },
});
