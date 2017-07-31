import Vue from 'vue';
import App from '../component/app.vue';
import router from '../component/router/router';

import leftbar from '../component/packages/leftbar/index'
import '../../assets/style/common.scss'

const components = [
    leftbar
];

const install = function(Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    })
};
install(Vue);

const app = new Vue({
    router,
    render : (h)=> h(App)
});

app.$mount('#app');


