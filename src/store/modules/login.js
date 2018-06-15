/**
 * Created by Admin on 2017/7/28.
 */
import * as types from '../mutation-types';

export default {
    state: {
        user_id: '',
        user_name: ''
    },
    mutations: {
    // 设置登陆获取的信息
        [types.SET_LOGIN_DATA] (state, obj) {
            Object.assign(state, obj);
        },
        // 设置真实名字（退出登陆的时候需要清空数据）
        [types.SET_USER_REAL_NAME] (state, name) {
            state.user_name = name;
        }
    },
    actions: {
        setLoginData ({ commit }, obj) {
            commit(types.SET_LOGIN_DATA, obj);
        },
        setUserRealName ({ commit }, name) {
            commit(types.SET_USER_REAL_NAME, name);
        }
    }
};
