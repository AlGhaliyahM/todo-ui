import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import TaskItem from './components/TaskItem.vue';
import TaskCard from './components/TaskCard.vue';
import './assets/tailwind.css';
const app = createApp(App);

app.component('TaskItem', TaskItem);
app.component('TaskCard', TaskCard);

app.use(createPinia());
app.use(router);
// app.use(ModalPlugin);

app.mount('#app');
