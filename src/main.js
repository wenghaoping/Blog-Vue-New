import Vue from 'vue';

import 'normalize.css/normalize.css';// A modern alternative to CSS resets
import App from './App';
import router from './router/router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
