import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import useVuelidate from '@vuelidate/core';

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/nprogress/nprogress.css' 

const app = createApp(App)

app.use(router, VueSweetalert2, useVuelidate)

app.mount('#app')
