import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'


// 声明路由
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export function goToCheckToken() {
    router.replace("/checkToken")
}


export default router