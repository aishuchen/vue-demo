<template>
<a-row>
    <a-col :span="12" :offset="6">
        <a-table 
        :data-source="users" 
        :columns="tableColumns" 
        :loading="loading"
        :row-key="data => data.id"
        :custom-row="rowWrapper"
        :custom-cell="cellWrapper"
    />
    </a-col>
</a-row>
</template>


<script>
import { ref, h } from 'vue'
import request from '../utils/request'

const tableColumns = [
    {
        title: "用户名",
        key: "username",
        dataIndex: "username",
    },
    {
        title: "邮箱",
        key: "email",
        dataIndex: "email"
    }
]

// <a-popover placement="topLeft">
//         <template #content>
//           <p>Content</p>
//           <p>Content</p>
//         </template>
//         <template #title>
//           <span>Title</span>
//         </template>
//         <a-button>TL</a-button>
//       </a-popover>
async function getUsers(loading, users){
    request.get("/users").then((resp) => {
        users.value = resp.data.records;
        loading.value = false
    })
};


function popover(msg){
    return h(
        "a-tooltip",
        {
            placement: "top",
        },
        [
            h(
                "a-button",
                {},
                ["Tooltip"]

            )
        ]
    )
    
}

export default {
    setup() {
        const users = ref(null)
        
        const loading = ref(users.value == null);

        getUsers(loading, users)

        const rowWrapper = (record, index) => {
            return {
                onmouseenter: (e) => {
                    // console.log(e)
                    // console.log(record, index)
                    return popover(null)
                }
            }
        }

        const cellWrapper = (record, rIndex) => {
            return {
                onmouseenter: (e) => {
                }
            }
        }

        return {
            tableColumns,
            users,
            loading,
            rowWrapper,
            cellWrapper,
        }
        
    },

}
</script>