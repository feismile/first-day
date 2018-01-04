<template>
<div class="aside">
  <!-- 个人资料 -->
  <div class="profile">
    <!-- 头像 -->
    <div class="avatar img-circle">
      <img src="./avatar.jpg">
    </div>
    <h4>布头儿</h4>
  </div>
  <!-- 导航菜单 -->
    <div class="navs">
      <ul class="list-unstyled">
        <li>
          <router-link to="/" active-class="active" exact>
            <i class="fa fa-home"></i> 仪表盘
          </router-link>
        </li>
        <li>
          <router-link to="users" active-class="active">
            <i class="fa fa-home"></i> 用户管理
          </router-link>
        </li>
        <li>
          <router-link to="/teachers">
            <i class="fa fa-home"></i> 讲师管理
          </router-link>
        </li>
        <li>
          <a href="javascript:;">
                      <i class="fa fa-cog"></i>
                      课程管理
                      <i class="arrow fa fa-angle-right"></i>
                  </a>
          <ul class="list-unstyled">
            <li>
              <a href="./course_add.html">
                               课程添加
                          </a>
            </li>
            <li>
              <a href="./course_list.html">
                              课程列表
                          </a>
            </li>
            <li>
              <a href="./course_category.html">
                              课程分类
                          </a>
            </li>
            <li>
              <a href="./course_topic.html">
                              课程专题
                          </a>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/">
            <i class="fa fa-home"></i> 广告管理
          </router-link>
        </li>

        <li>
          <a href="javascript:;">
                      <i class="fa fa-cog"></i>
                      系统设置
                      <i class="arrow fa fa-angle-right"></i>
                  </a>
          <ul class="list-unstyled">
            <li>
              <a href="javascript:;">
                              网站设置
                          </a>
            </li>
            <li>
              <a href="javascript:;">
                               权限管理
                          </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
	
	export default {
		data(){
			return {}
		}
	}
</script>

<style></style>