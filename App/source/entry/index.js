
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import 'asset/css/index.less';
// import axios from 'axios';

// // 拦截request,设置全局请求为ajax请求
// axios.interceptors.request.use(function (config) {  //配置发送请求的信息
//     let xtoken = Date.parse(new Date());
//     if(config.method === 'get'){
//         config.url=config.url+'&_k='+xtoken;
//     }
//     if(config.method === 'post' && !config.hetUpload){
//         config.data = config.data+'&_k='+xtoken;
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });
//
// // 拦截响应response，并做一些错误处理
// axios.interceptors.response.use((response) => {
//     if(response.status  === 200 || response.status  === 206 || response.status  === 304){
//         return response.data;
//     }
//     const data = response.data;
//     const err = new Error(data.description);
//     err.data = data;
//     err.response = response;
//     throw err;
// }, (err) => { // 这里是返回状态码不为200时候的错误处理
//     // console.log('路由跳轉');
//     return err;
//     // return Promise.reject(err);
// });

// 容器
const container = document.getElementById('container');

// // 组件模块
// import App from 'components/app/App';
// // 抄表
// import MeterReading from 'routes/main/routes/meterReading/components/index.jsx';
// // 泳池
// import SwimmingPool from 'routes/main/routes/swimmingPool/components/index.jsx';
//
// const router = (
//     <Router  history={hashHistory}>
//         <Route path="/" component={App} >
//             <IndexRoute component={MeterReading} />
//             <Route path="swimmingPool" component={SwimmingPool}/>
//             <Route path="meterReading" component={MeterReading}/>
//         </Route>
//     </Router>
// )




class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return <div className="shopping-list">1111</div>
    }
}

render(<App/>, container);