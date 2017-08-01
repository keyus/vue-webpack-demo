/**
 * Created by david.hu on 7/31/2017.
 */
import AmSitemenu from './src/sitemenu.vue';

/* istanbul ignore next */
AmSitemenu.install = function(Vue) {
    Vue.component(AmSitemenu.name, AmSitemenu);
};

export default AmSitemenu;
