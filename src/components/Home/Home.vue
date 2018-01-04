<template>

	<div>
		<app-head></app-head>
		<div class="main">
	  <!-- 侧边栏 -->
		  <app-aside></app-aside>
		  <!-- 其它页面自已调整吧 -->
		  <div class="container-fluid">
		    <!-- 由路由导航过来的 -->
		    <router-view></router-view>
		  </div>
		</div>
	</div>
</template>


<script>

import AppHead from "../AppHead/AppHead"

import AppAside from "../AppAside/AppAside"

	export default {
		data(){
			return {}
		},
		components:{
			AppHead,
			AppAside
		}
	}
</script>

<style>
	
</style>