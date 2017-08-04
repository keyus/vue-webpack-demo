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
                <template  v-for="it in data2">
                    <tr>
                        <td class="user" @click="toggle(it.pid,$event)" :data-toggle="true"><span :class="{'icon-sanjiao1': it.son}" ></span>{{it.name}}</td>
                        <td class="hash">{{it.is_nav}}</td>
                        <td class="text">{{it.sort}}</td>
                        <td class="status icon-col">
                            <router-link :to="{path: '/category/edit', query : { id: it.pid }}" :data-id="it.pid">编辑</router-link>
                            <a href="">删除</a>
                        </td>
                    </tr>
                    <template  v-for="item in it.son">
                        <tr class="son" :data-pid="it.pid" :data-toggle="true">
                            <td class="user" @click="toggle(item.pid,$event)"><span :class="{'icon-sanjiao1': item.son}"></span>{{item.name}}</td>
                            <td class="hash">{{item.is_nav}}</td>
                            <td class="text">{{item.sort}}</td>
                            <td class="status icon-col">
                                <router-link :to="{path: '/category/edit', query : { id: item.pid }}" :data-id="item.pid">编辑</router-link>
                                <a href="">删除</a>
                            </td>
                        </tr>
                        <template v-for="last in item.son" >
                            <tr class="sun" :data-pid="it.pid" :data-ppid="item.pid">
                                <td class="user">{{last.name}}</td>
                                <td class="hash">{{last.is_nav}}</td>
                                <td class="text">{{last.sort}}</td>
                                <td class="status icon-col">
                                    <router-link :to="{path: '/category/edit', query : { id: last.pid }}" :data-id="last.pid">编辑</router-link>
                                    <a href="">删除</a>
                                </td>
                            </tr>
                        </template>
                    </template>
                </template>
            </table>
        </div>
    </div>

</template>

<script>
    import Util from '../../utils/index';
    export default {
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            toggle(pid,e) {
                let dom = document.querySelectorAll(`[data-pid="${pid}"],[data-ppid="${pid}"]`);
                let toggle = e.target.dataset.toggle;
                if(toggle == 'true') {
                    Array.prototype.forEach.call(dom,function (i) {
                        i.style.display = "none";
                        e.target.dataset.toggle = 'false';
                    })
                }else{
                    Array.prototype.forEach.call(dom,function (i) {
                        i.style.display = "table-row";
                        e.target.dataset.toggle = 'true';
                    })
                }

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
                    if(!this.keywords.trim()) return Util.toTree(this.data,'pid','parent_id');
                    return Util.toTree(this.data.filter( item =>{
                        return item.name.indexOf(this.keywords.trim()) !== -1;
                    }),'pid','parent_id');
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