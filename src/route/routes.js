import Index from "../components/index.vue"
import Users from "../components/users.vue"
import CheckToken from "../components/checkToken.vue"


// 声明路由规则
const routes = [
    {path: "/", component: Index},
    {path: "/index", redirect: "/"},
    {path: "/users", component: Users},
    {path: "/checkToken", component: CheckToken},
]

export default routes;