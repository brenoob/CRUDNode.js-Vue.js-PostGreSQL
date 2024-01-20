import { createRouter, createWebHistory } from 'vue-router'
import  NProgress  from 'nprogress'
import CreateEmployeeComponent from '../components/create-employee/CreateEmployeeComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Create new employee',
      component: CreateEmployeeComponent
    },
    {
      path: '/edit-employee',
      name: 'edit employees',      
      component: () => import('../components/edit-employee/EditEmployeeComponent.vue')
    },
    {
      path: '/list-employee',
      name: 'list employees',      
      component: () => import('../components/list-employee/ListEmployeeComponent.vue')
    }
  ]
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
      NProgress.configure({ trickleSpeed: 20 });
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


export default router
