// from后面的路径, 如果含有./ ../那么就相对于当前文件找文件
// 如果没有, 那么就会去node_modules里面找对应的包
// 1.1 导入第三方包
import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Common from '../component/common';  // 自动找到index.js引入
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import axios from 'axios';  
import VueRouter from 'vue-router';

// 1.2 启用vue插件
Vue.use(MintUi);
Vue.use(Common);
Vue.use(VueRouter);

Vue.prototype.axios = axios;   // 把axios库放置到原型, 将来其他组件直接可以拿到axios对象

// 2.1 导入根组件
import AppComponent from '../component/App.vue';

// 2.2 导入配置
import routerConfig from '../router'  // 自动找到index.js引入

// 2.2 渲染根组件, 启动项目
new Vue({
    el: '#app',
    render(createNode) {
        return createNode(AppComponent);
    },
    router: new VueRouter(routerConfig)
});
