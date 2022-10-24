import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import TaskItem from './components/TaskItem.vue';
import TaskCard from './components/TaskCard.vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import { BToastPlugin } from 'bootstrap-vue-3';

const app = createApp(App);

app.component('TaskItem', TaskItem);
app.component('TaskCard', TaskCard);

app.use(createPinia());
app.use(router);
app.use(BootstrapVue3);
app.use(BToastPlugin);

app.mount('#app');
