import { createApp } from 'vue'
import App from './App.vue'
import router, {goToCheckToken} from './route/router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {hasLocalToken} from './utils/checkToken'


const app = createApp(App);
app.use(Antd);   // 使用 Antd
app.use(router);  // 使用路由
app.mount('#app')



if (!hasLocalToken){
    goToCheckToken();
} else {
    router.replace("/users");
}

