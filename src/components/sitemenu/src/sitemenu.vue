<template lang="pug">
div.sitemenu
    div.sitemenu-logo
        a
            div.flex-center
                div.logo
                    span.icon-bishujushichang6
                div.title 后台管理中心

    div.sitemenu-list
        ul
            li
                router-link(
                        to="/"
                        :class="{ active : currentMenu === 'index'}"
                        @click.native="changeMenu('index')"
                    )
                    span.icon-kanguo
                    span.text 概览
            li
                router-link(
                    to="/category"
                    :class="{ active : currentMenu === 'category'}"
                    @click.native="changeMenu('category')"
                )
                    span.icon-liebiao
                    span.text 分类
            li
                router-link(
                    to="/article"
                    :class="{ active : currentMenu === 'article'}"
                    @click.native="changeMenu('article')"
                )
                    span.icon-wenjianjia
                    span.text 文章
            li
                a
                    span.icon-tupian
                    span.text 广告 slider
            li
                a
                    span.icon-configuration-centre
                    span.text 配置
    div.subtitle 管理员安全控制
    div.sitemenu-list
        ul
            li
                a
                    span.icon-kefuyouxian
                    span.text 管理员


</template>

<style lang="scss">
.sitemenu {
    background-color: #F4F5F7;
    box-sizing: border-box;
    color: #42526E;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    transform-style: preserve-3d;
    width: 240px;
    border: .8rem solid #F4F5F7;
    .subtitle{
        padding: 1rem;
        font-weight: bold;
        color: #5e6c84;
        font-size: 1.2rem;
    }
    .sitemenu-logo{
        margin-bottom: 2px;
        padding: 24px 22px 10px 20px;
        position: sticky;
        top: 0;
        z-index: 2;
        .logo{
            font-size: 2rem;
            margin-right: 1rem;
            color: #42526e;
            [class^="icon-"]{
                font-size: 2.5rem;
            }
        }
        .title{
            font-size: 1.2rem;
            font-weight: bold;
            color: #42526e;
        }
    }

    ul{

        a {
            padding: .625rem 1rem;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            font-size: 1.2rem;
            cursor: pointer;
            color: #42526e;

            &:hover{
                background-color: rgba(9, 30, 66, 0.04);
            }

            [class^="icon-"]{
                width: 40px;
                text-align: center;
                margin-right: .3rem;
                font-size: 1.8rem;
            }
        }
        a.active {
            background-color: rgba(9, 30, 66, 0.04);
            color: #0052cc;
        }

    }
}
</style>

<script>
    export default {
        name: "AmSitemenu",
        data () {
            return {
            }
        },

        computed : {
            currentMenu () {
                return this.$store.state.currentMenu
            }
        },

        methods : {
            changeMenu (e) {
                this.$store.commit('currentMenu',e);
            }
        }

    }
</script>