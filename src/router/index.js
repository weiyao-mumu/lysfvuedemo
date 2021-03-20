import { createRouter, createWebHistory } from 'vue-router'
// 页面
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Active from '../views/Active.vue'
import Organization from '../views/Organization.vue'
import Registered from '../views/Registered.vue'
// 组件
import Consult from '../components/Consult.vue'
import Information from '../components/Information.vue'
import Culture from '../components/Culture.vue'
import Law from '../components/Law.vue'

const routes = [{
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/Home',
    children: [{
        path: 'Home',
        component: Home,
        redirect: '/Home/consult',
        children: [{
            path: "consult",
            component: Consult
        }, {
            path: "information",
            component: Information
        }, {
            path: "culture",
            component: Culture
        }, {
            path: "law",
            component: Law
        }]
    }, {
        path: "active",
        component: Active
    }, {
        path: "organization",
        component: Organization
    }]
}, {
    path: "/register",
    component: Registered
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router