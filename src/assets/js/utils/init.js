import Vue from 'vue';
import {
    Button,
    Input,
    Form,
    FormItem,
    Tabs,
    Row,
    Col,
    Upload,
    Dialog
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
    Vue.use(Upload);
    Vue.use(Dialog);
};

export default () => {
    elementInit();
};
