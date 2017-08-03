import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index.vue';
import Category from '../views/category/index.vue';
import CategoryEdit from '../views/category/edit.vue';
import NProgress from 'nprogress';
Vue.use(VueRouter);


const routes = [
    {
        name: 'index',
        path: '/',
        meta: {
            title: 'D+后台管理系统'
        },
        component:  Index
    },
    {
        name: 'category',
        path: '/category',
        meta: {
            title: '分类管理-D+后台管理系统'
        },
        component:  Category,
    },
    {
        path: '/category/edit',
        meta: {
            title: '编辑分类-D+后台管理系统'
        },
        component:  CategoryEdit,
    }
];

const router = new VueRouter({
    routes,
    beforeHooks () {
        console.log(1)
    }

});
router.beforeEach( (to,from,next) => {
    NProgress.start();
    next();
    NProgress.done();
});
export default router;