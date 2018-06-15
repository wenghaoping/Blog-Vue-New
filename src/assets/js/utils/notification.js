/**
 * Created by Admin on 2017/11/13.
 */
import { Notification } from 'element-ui';

// 弹框类
// 错误弹窗(所有的错误调用,红色叉)
export function error (text, title = '') {
    Notification.error({
        title: title,
        message: text,
        offset: 300,
        duration: 3000
    });
}
// 成功弹窗(绿钩)
export function success (text, title = '') {
    Notification.success({
        title: title,
        message: text,
        offset: 300,
        duration: 1500
    });
}
// 警告弹窗,(黄色叹号)
export function warning (text, title = '') {
    Notification.warning({
        title: title,
        message: text,
        offset: 300,
        duration: 2000
    });
}
