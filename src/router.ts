import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/custom',
            name: 'custom',
            component: () => import('@/views/CustomComp.vue'),
        },
        {
            path: '/vant',
            name: 'vant',
            component: () => import('@/views/VantComp.vue'),
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import('@/views/404/404.vue'),
            meta: {
                title: '404',
            },
        },
    ]
})