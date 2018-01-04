import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import nprogress from "nprogress"

import Home from "./components/Home/Home"
import Login from "./components/Login/Login"

import Dashboard from "./components/Dashboard/Dashboard"
import UserList from "./components/UserList/UserList"
const router = new VueRouter({
	routes:[
		{
			path:"/",
			component:Home,
			children:[
				{
					path:"",
					component:Dashboard,
					meta:{requiresAuth:true}
				},
				{
					path:"/users",
					component:UserList,
					meta:{requiresAuth:true}
				}
			]

		}, 
		{
			path:"/login",
			component:Login
		}
	]

})

//全局路由导航钩子函数
//所有的路由在导航之前必须经过这里
//next表示放行
//如果不调用next,则请求就会停留在这里
// router.beforeEach((to,from,next)=>{

//       //校验是否登录
//       if(!window.localStorage.getItem("bxg-token")){

//         return router.push("/login")

//     	}

// 		nprogress.start()
// 		next()
// 	    nprogress.done()
// })

router.beforeEach((to, from, next) => {
	nprogress.start()
	//如果当前的路由需要登录
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    //该路由需要授权,需要检查是否登录
    //如果没有登录则跳转到登录页
    const isLogin = window.localStorage.getItem("bxg-token")
    if (!isLogin) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }//会被转换为查询字符串放到/login之后
      })
    } else {
    	//登录成功
      next()
    }
  } else {
  	//不需要验证登录权限
    next() // 确保一定要调用 next()
  }
  nprogress.done()
})

export default router