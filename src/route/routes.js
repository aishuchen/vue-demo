import Index from "../components/index.vue"
import Users from "../components/users.vue"
import CheckToken from "../components/checkToken.vue"


const routes = [
    {path: "/", component: Index},
    {path: "/index", redirect: "/"},
    {path: "/users", component: Users},
    {path: "/checkToken", component: CheckToken},
]

export default routes;