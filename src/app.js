import Vue from 'vue';
import App from './app.vue';
import store from './store/index';
import router from './router/index';
import leftbar from './components/leftbar/index';
import sitemenu from './components/sitemenu/index';

import './sass/common.scss'

const components = [
    leftbar,
    sitemenu
];

const install = function(Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    })
};
install(Vue);

const app = new Vue({
    store,
    router,
    render : (h)=> h(App),
    mounted() {
        console.log(this)
    }
});
app.$mount('#app');


