/*
*  Compile to dll, only when the project is first run
*  Dll is different from CommonChunks
*
*  Related Reading: https://zhuanlan.zhihu.com/p/21748318
*
*/

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        vendor: ['react', 'react-dom', 'react-router','axios']
    },
    output: {
        filename: '[name].dll.[chunkhash].js',
        library: '[name]_dll_[chunkhash]', // dll文件内的name名称命名规则，映射关系，与下文DllPlugin.name对应
        path: path.join(__dirname, './App/source/build/'),
    },
    plugins:[
        new webpack.DllPlugin({
            context: __dirname,
            // manifest文件内的name,与上文output中配置对应
            name: '[name]_[chunkhash]',
            // 生成索引清单的文件名，竟然是path属性这里更改manifest的文件名，why not filename
            path: path.join(__dirname, './App/source/build/','[name].manifest.json'),
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin([
                './App/source/build/manifest.*.json',
                './App/source/build/vendor.*.*.js'
            ],
            {
                root: __dirname, // webpack文件夹的绝对路径,Default: root of your package
                verbose: true,
                exclude: ['manifest.json'],// 无法排除指定正则文件格式,so,要排除从第一个参数吧
            }
        ),
    ]
};