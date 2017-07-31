/**
 * Created by david.hu on 7/31/2017.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexView from '../view/index.vue';

const routes = [
    { path : '/' , component : IndexView }
];


const router = new VueRouter({
    routes
});

export default router;