import Vue from 'vue';
import Vuex from 'vuex';
import cookie from 'js-cookie';

Vue.use(Vuex);
let currentMenu = cookie.get('currentMenu') || "index" ;

let store = new Vuex.Store({
    state: {
        isLogin : null,
        currentMenu : currentMenu
    },
    mutations: {
        currentMenu (state,value) {
            state.currentMenu = value;
            cookie.set('currentMenu',value);
        }
    }
});

export default store;