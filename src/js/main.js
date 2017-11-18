// from后面的路径, 如果含有./ ../那么就相对于当前文件找文件
// 如果没有, 那么就会去node_modules里面找对应的包
// 1.1 导入第三方包
import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Common from '../component/common';  // 自动找到index.js引入

// 1.2 启用vue插件
Vue.use(MintUi);
Vue.use(Common);

// 2.1 导入根组件
import AppComponent from '../component/App.vue';

// 2.2 渲染根组件, 启动项目
new Vue({
    el: '#app',
    render(createNode) {
        return createNode(AppComponent);
    }
});
