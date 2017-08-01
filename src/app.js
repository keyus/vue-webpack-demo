import Vue from 'vue';
import App from './app.vue';
import axios from 'axios';

import leftbar from './components/leftbar/index'
import './sass/common.scss'

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
    render : (h)=> h(App),
    mounted () {
        axios.get('http://10.148.60.223/api/account/preferences/lang')
            .then(function (response) {
                console.log(response);
            })
    }
});

app.$mount('#app');


