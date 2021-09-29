import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from './views/Container'
import Admin from './views/Admin'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'home',
        component: Container
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    }
]
export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: function (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    },
    routes: routes
});