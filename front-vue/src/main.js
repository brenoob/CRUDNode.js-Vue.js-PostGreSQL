import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

import VueSweetalert2 from 'vue-sweetalert2';
import useVuelidate from '@vuelidate/core';

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/nprogress/nprogress.css' 

/* add icons to the library */
library.add(faAddressBook)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(VueSweetalert2)
app.use(useVuelidate)

app.mount('#app')
