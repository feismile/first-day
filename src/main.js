import Vue from 'vue'
import App from './App'

import router from "./router"

import http from "./assets/js/http"

Vue.config.productionTip = false


//在启动入口这里,载入页面需要的样式
//我们把通用的样式在入口载入,组件自己的在自己那写就行
import "bootstrap/dist/css/bootstrap.min.css"

import "font-awesome/css/font-awesome.min.css"

import "nprogress/nprogress.css"

//导入第三方公共样式之后,就可以导入自己的公共样式了,然后在自己的组件中写自己的样式

import "./assets/less/index.less"
//挂在使用插件 使其生效
Vue.use(http)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
