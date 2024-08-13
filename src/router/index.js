import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import translation from '@/i18n/translation'
import DevicesView from '../views/DevicesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:locale?',
            component: RouterView,
            beforeEnter: translation.routeMiddleware,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: 'devices',
                    name: 'devices',
                    component: DevicesView
                },
                {
                    path: 'software-updates',
                    name: 'software-updates',
                    component: DevicesView
                },
                {
                    path: 'campaigns',
                    name: 'campaigns',
                    component: DevicesView
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: {
                name: 'home'
            }
        }
    ]
})

export default router
