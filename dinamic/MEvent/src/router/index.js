import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from "../views/RegisterView.vue"
import EventsView from "../views/EventsView.vue"
import TasksView from "../views/TasksView.vue"
import LoginView from "../views/LoginView.vue"
import LandingPageView from "../views/LandingPageView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPageView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/my-events',
      name: 'Events',
      component: EventsView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: TasksView
    },
    
  ]
})

export default router
