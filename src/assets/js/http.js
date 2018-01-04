//请求地址太长
//每次手动引入太费劲
//token

//全局配置axios的配置项
//默认的路径
// axios.defaults.baseURL = 'https://api.example.com';

// //增加公共请求头,每次使用axios发请求  都会自动带上这个请求头
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


import * as auth from "./auth"

import axios from "axios"
//现在这个instance实例方法 具有axios的所有行为,因为实例不影响全局
// 相当于复制的axios 不会影响axios
//接下来我们请求bxg-api的时候都去使用这个axios实例来发送请求

var bxgAxios =  axios.create({
  baseURL: 'http://api.circle.ink/v1/',//默认请求地址
  timeout: 60000,//请求超时时间
  headers: { 'X-Access-Token':auth.getToken()  }//公共的请求头
});

export default {
	//接下来,把axios配置为Vue的一个插件
	install: function (Vue, options) {
	 
	  // 4. 添加实例方法
	  //如果想要实现this.xxx  可以在这里写
	  //然后在入口实例中通过Vue.use(插件对象)机会发现在组件实例中多了一个对象$http
	  Vue.prototype.$http = bxgAxios
	}
}

