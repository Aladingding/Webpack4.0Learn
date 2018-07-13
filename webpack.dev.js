/*
*
* NamedModulesPlugin && OccurrenceOrderPlugin
* https://blog.csdn.net/chenqiuge1984/article/details/80128021
*
*
*
*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: "eval-source-map",
    entry:{
        index: path.resolve(__dirname,'./App/source/entry/index.js'),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname,'./App/source/build/'),
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin([
                './App/source/build/index.*.*',
                '!./App/source/build/vendor.*.*.js',
                '!./App/source/build/vendor.dll.*.js',
                '!./App/source/build/vendor.manifest.js'
            ],
            {
                root: __dirname, // webpack文件夹的绝对路径,Default: root of your package
                verbose: true,
                exclude: ['manifest.json'],// 无法排除指定正则文件格式,so,要排除从第一个参数吧
            }
        ),
        // 热更新
        // new webpack.HotModuleReplacementPlugin(),
        // 引入dll
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest:  path.resolve(__dirname,'./App/source/build/vendor.manifest.json'),
        }),
        new HtmlWebpackPlugin({
            title: 'React-router 4 && webpack4.0+',
            template: './App/source/html/index.ejs', // html模板文档地址，webpack默认模板为ejs
            filename: 'index.html', // 由模板生成的文件名和存放位置，可带路径的？需要去官网文档看下
            // author: 'tomy',
            // inject: 'true',// 资源文件注入位置true,body,header,false
        }),
        new OpenBrowserWebpackPlugin({
            browser: 'Chrome',
            url: `http://localhost:8080/#/main`,
        }),
        // // 经常使用的模块排到前面，提升浏览器运行速度，这个可能在生产环境比较好吧
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // // NamedModulesPlugin使用模块的相对路径作为模块的 id，所以只要我们不重命名一个模块文件，那么它的id就不会变，更不会影响到其它模块了：
        // new webpack.NamedModulesPlugin(),
    ],
    module:{
        rules:[
            {
                // 需要检查打包的各种js资源文件
                test: /(\.jsx|\.js|\.es6)$/,
                // 排除查找模块的目录
                use: {
                    loader: 'babel-loader',
                        options: {
                        presets: ['@babel/preset-react']
                    }
                },
                // options: {
                //     presets: ['@babel/preset-react'],
                //     //plugins: ['@babel/plugin-transform-runtime']
                // }
            },
            {
                test: /\.css$/,
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader?modules' },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },

        ],
    },
};