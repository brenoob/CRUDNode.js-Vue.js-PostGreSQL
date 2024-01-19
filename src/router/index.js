import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Create new employee',
      component: () => import ('../components/create-employee/CreateEmployeeComponent.vue')
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

export default router
