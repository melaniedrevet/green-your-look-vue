import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/test",
		name: "test",
		component: () => import("../views/test.vue"),
	},
	{
		path: "/:type",
		name: "type",
		component: () => import("../views/ListStyles.vue"),
	},
	{
		path: "/:type/:style",
		name: "style",
		component: () => import("../views/Style.vue"),
	},
	
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
