import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import NotFoundView from '../views/NotFoundView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
        title: '點對點傳輸',
        nav: false
    }
},
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: NotFoundView,
    //     meta: {
    //         title: '404 - Origin | 起源劇團',
    //         nav: true
    //     }
    // }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.body.scrollIntoView({ behavior: 'smooth' });
    }
})

router.beforeEach(async (to, from, next) => {
    window.document.title = to.meta.title;
    if (to.meta.nav) window.document.body.classList.add('nav');
    else window.document.body.classList.remove('nav');
    next();
})

export default router
