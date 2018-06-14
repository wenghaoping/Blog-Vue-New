import Vue from 'vue';
import {
    Button,
    Input,
    Form,
    FormItem,
    Tabs,
    Row,
    Col
} from 'element-ui';

// 定位初始化
const elementInit = () => {
    Vue.use(Button);
    Vue.use(Input);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Tabs);
    Vue.use(Row);
    Vue.use(Col);
};

export default () => {
    elementInit();
};
