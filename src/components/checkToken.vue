<template>
    <h1>Welcome</h1>
    <a-form :model="formState" >
        <a-form-item :wrapper-col="{ span: 6,  offset: 9 }">
            <a-input v-model:value="formState.token" placeholder="Token"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
            <a-button type="primary" :loading="loading" shape="round" @click="onSubmit">
                确定
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import {reactive, ref, h} from 'vue'
import {checkToken} from '../utils/checkToken'
import router from '../route/router'
import {LOCAL_TOKEN_NAME} from '../utils/const'
import {message} from 'ant-design-vue'

export default {
    setup() {
        const formState = reactive({
            token: ""
        });

        const loading = ref(false);

        const errored = ref(false);

        const onClose = () => {
            errored.value = false;
        }

        const onSubmit = async () => {
            loading.value = true;
            const obj = await checkToken(formState.token);
            const {status, token} = obj;
            
            if (!status){
                message.error("Token错误", 1);
                loading.value = false;
                errored.value = true;
                return
            }
            localStorage.setItem(LOCAL_TOKEN_NAME, token)
            router.replace("/users")

        };

        return {
            formState,
            onSubmit,
            loading,
            errored,
            onClose
        }
    },
}
</script>>