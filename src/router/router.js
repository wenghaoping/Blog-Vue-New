import Vue from 'vue';
import Router from 'vue-router';
import routeData from 'src/router';
import store from 'store';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';
// Progress 进度条样式
function lazyLoad(path) {
    return () => import('src/' + path + '.vue');
}
// 处理路由数据，然后使用
let routes = [];
for (let key in routeData) {
    let item = {};
    item.name = routeData[key].name;
    item.component = lazyLoad(routeData[key].path);
    item.path = key;
    item.meta = routeData[key].meta;
    routes.push(item);
}

Vue.use(Router);

const router = new Router({
    base: '/',
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    },
    routes
});
// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (to) {
        NProgress.start(); // 开启Progress
    }
    // 获取数据,是否初始化过
    if (store.state.inited) {
        next();
    } else {
        next();
    }
});
// 全局后置钩子
router.afterEach(() => {
    NProgress.done(); // 结束Progress
});

export default router;
