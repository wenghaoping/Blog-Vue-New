import request from 'utils/request';

export function signup(data) {
    return request({
        url: '/signup',
        method: 'post',
        data
    });
}
