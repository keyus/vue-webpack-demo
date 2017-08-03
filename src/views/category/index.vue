<template>
    <div class="full">
        <h1>分类目录 </h1>
        <div class="search">
            <span class="input">
                <el-input
                        placeholder="请输入分类名"
                        icon="search"
                        v-model="keywords"
                        >
                </el-input>
            </span>
        </div>

        <div class="">
            <table class="am-table">
                <tr>
                    <th class="user">名称</th>
                    <th class="hash">统计</th>
                    <th class="text">排序</th>
                    <th class="status icon-col">操作</th>
                </tr>
                <tr v-for="it in data2" :key="it.pid">
                    <td class="user">{{it.name}}</td>
                    <td class="hash">{{it.is_nav}}</td>
                    <td class="text">{{it.sort}}</td>
                    <td class="status icon-col">
                        <router-link :to="{path: '/category/edit', query : { id: it.pid }}" :data-id="it.pid">编辑</router-link>
                        <a href="">删除</a>
                    </td>
                </tr>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        data() {
            return {
                data : "",
                keywords: "",
            };
        },
        computed : {
            data2 () {
                if(Array.isArray(this.data)){
                    if(!this.keywords.trim()) return this.data;
                    return this.data.filter( item =>{
                        return item.name.indexOf(this.keywords.trim()) !== -1;
                    });
                }
                return this.data;
            }
        },

        mounted () {
            this.api.category().then((res)=>{
                this.data = res.data;
            })
        }

    };
</script>