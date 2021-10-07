import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from './views/Container'
import Login from './views/Login'
import Admin from './views/Admin'
import { getAuth } from "firebase/auth";

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'home',
        component: Container
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: {
            authRequired: true,
        },
    }
]


const router = new VueRouter({
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            next();
        } else {
            next({
                path: '/login',
            });
        }
    } else {
        next();
    }
});

export default router