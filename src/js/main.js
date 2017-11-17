// 要把组件渲染到页面中, 我们就必须要导入Vue这个库, 然后才可以new他
// es6语法导入的Vue与我们在浏览器中使用的Vue有点小区别, 失去了浏览器模版编译功能,
// 失去该功能的原因是, 你使用es6语法, vue知道你一定使用了构建工具, 那么使用构建工具,
// 你应该会使用vue-loader, 使用了vue-loader他会在本地打包时把模版编译好, 
// 在浏览器中直接使用, 相比咱们以往的方式性能会有提升.
import Vue from 'Vue';
import App from '../component/App.vue';

new Vue({
    el: '#app',
    render: function(c) {
        return c(App);  // 这个函数需要我们返回一个组件, 把返回的组件渲染到el标签中
    }
});
