<template>

    <div class="full">
        <h1>分类编辑</h1>

        <div class="am-form cateform w5">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="分类名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="归属">
                    <el-select v-model="form.parent_id" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="启用">
                    <el-switch on-text="" off-text="" v-model="form.isuse"></el-switch>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input v-model="form.sort"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">修改</el-button>
                    <el-button>取消</el-button>
                </el-form-item>

            </el-form>

        </div>

    </div>

</template>

<style lang="scss">
    .cateform {
        padding-top: 3rem;
        .el-input {
            width: 360px;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                id : this.$route.query.id,
                form: {
                    name: '',
                    delivery: false,
                    isuse: true,
                    sort: '50'
                }
            }
        },
        mounted () {
            let id = this.id;
            this.api.category(id).then((res)=>{
                this.form = res.data;
            })
        },

        methods: {
            onSubmit() {
                console.log(this.id)
                console.log('submit!');
            }
        }
    }
</script>