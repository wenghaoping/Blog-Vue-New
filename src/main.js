import Vue from 'vue';

import 'normalize.css/normalize.css';// A modern alternative to CSS resets
import Common from 'common';
import App from './App';
import router from './router/router';
import store from './store';

Common.init();
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
