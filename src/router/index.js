import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/SignUp',
		name: 'SignUp',
		component: () => import('../views/SignUp.vue'),
	},
	{
		path: '/ForgotPassword',
		name: 'ForgotPassword',
		component: () => import('../views/ForgotPassword.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
