import Vue from 'vue';
import App from './app.vue';
import store from './store/index';
import router from './router/index';
import ElementUI from 'element-ui'
import Api from './api/index';
import leftbar from './components/leftbar/index';
import sitemenu from './components/sitemenu/index';

import './sass/common.scss'
import 'element-ui/lib/theme-default/index.css';

Vue.prototype.api   = Api;

Vue.use(ElementUI);
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
});
app.$mount('#app');


