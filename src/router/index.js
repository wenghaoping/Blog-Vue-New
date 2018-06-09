export default {
    '/': {
        name: 'index',
        path: 'views/index/index',
        meta: { keepAlive: true }
    },
    '*': {
        name: '',
        path: 'views/other/404'
    }
};
