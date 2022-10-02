import { defineStore } from 'pinia';
import { APISettings } from '../api/config';

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [] as any[],
  }),
  getters: {
    getTodos: (state) => state.todos,
    //getTest: (state) => state.test,
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
          // console.log(this.todos);
        })
        .catch((err) => console.log(err.message));
    },
    // addTask() {
    //   this.counter--;
    // },
    //getID() {},
    //updateTask() {},
    //countTasks() {},
    
    async deleteTask(ID: Number){

      await  fetch(APISettings.baseURL + '/todo/' + ID, {
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
            })
            .catch((err) => console.log(err.message));
        },

        async postTask(newTask:String){
    
          console.log(newTask)
          console.log("Inside POST")

          await fetch(APISettings.baseURL + '/todo', {
            method: 'POST',
            headers: APISettings.headers,
            credentials: 'include', //to get the cookie
            body: JSON.stringify(newTask),
          })
            .then((res) => res.json())
            .then(() => {
              
              alert("The task Added :  " + newTask)
              //console.log('this is in the store', this.todos);
            })
            .catch((err) => console.log(err.message));


        }
    }   
  },
);