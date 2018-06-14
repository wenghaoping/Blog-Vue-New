export default {
    // 首页
    '/': {
        name: 'index',
        path: 'views/index/index',
        meta: { keepAlive: true }
    },
    // 聊天
    '/chating': {
        name: 'chating',
        path: 'views/chat/index'
    },
    // 留言本
    '/guestbook': {
        name: 'guestbook',
        path: 'views/guestbook/index'
    },
    // 登陆
    '/sign-in': {
        name: 'sign-in',
        path: 'views/logining/sign-in'
    },
    //注册
    '/sign-up': {
        name: 'sign-up',
        path: 'views/logining/sign-up'
    },
    '*': {
        name: '',
        path: 'views/other/404'
    }
};
