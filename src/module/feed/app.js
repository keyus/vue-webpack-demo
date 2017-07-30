import Vue from 'vue';
import App from '../component/app.vue';

const app = new Vue({
    render : (h)=> h(App)
})

app.$mount('#app');


