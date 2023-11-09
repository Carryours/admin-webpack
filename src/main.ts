// import { str } from "@/add";

import App from "@/App.vue";
import router from '@/routes';
import { createPinia } from "pinia";
import { createApp } from "Vue";
import '@/style.css'

createApp(App).use(router).use(createPinia()).mount('#app');

console.log("Hello Webpack");
