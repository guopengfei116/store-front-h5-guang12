const path = require('path');
const HtmlWP = require('html-webpack-plugin');
const CleanWP = require('clean-webpack-plugin');

module.exports = {
    // 打包的入口文件
    entry: path.resolve(__dirname, './src/js/main.js'),
    // 输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 插件配置
    plugins: [
        new HtmlWP({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CleanWP(['dist'])
    ],
    // 模块配置
    module: {

        // 配置loader规则
        rules: [

            // css
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },

            // less
            {
                test: /\.less$/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            },

            // html
            {
                test: /\.(html|tpl)$/,
                use: [ 'html-loader' ]
            },

            // 静态资源引用
            {
                test: /\.(png|jpeg|gif|jpg|svg|mp3)$/,
                use: [ 
                    { loader: 'url-loader', options: { limit: 10240 } } // 小于10KB的打包
                ]
            },

            // js
            {
                test: /\.js$/,
                use: [ 'babel-loader' ],
                exclude: path.resolve(__dirname, 'node_modules')
            },

            // vue
            {
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            }

        ]
    }
};
