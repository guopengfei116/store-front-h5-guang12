// 编写属于自己的公共Vue组件库
import HeaderComponent from './header.vue';
import FooterComponent from './footer.vue';

// Vue插件要求提供一个install方法, 这个方法会被注入Vue
// 需要我们调用Vue的filter component directive去扩展功能
export default {
    install(Vue) {
        Vue.component('app-header', HeaderComponent);
        Vue.component('app-footer', FooterComponent);
    }
};
