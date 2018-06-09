import request from 'utils/request';

export function get(opts) {
    return request({
        url: '/get',
        method: 'post',
        opts: opts
    });
}
