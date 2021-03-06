import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import( '../views/About.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import( '../views/Login.vue')
	},
	{
		path: '/Forgot-password',
		name: 'Forgot-password',
		component: () => import( '../views/forgotpass.vue')

	},
	{
		path: '/register',
		name: 'Register',
		component: () => import( '../views/Register.vue')

	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
