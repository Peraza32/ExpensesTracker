import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Login from "../views/Login.vue";

const routes = [
    {path: "/",                name: 'Home',     component: Home},
    {path: "/login",           name: 'Login',    component: Login},
    {path: "/:pathMatch(.*)*", name: 'NotFound', component: NotFound}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes 
})

export default router;