<template>
<div class="login">
  <div class="login-wrap">
    <div class="avatar">
      <img src="./monkey.png" class="img-circle" alt="">
    </div>
    <form @submit.prevent="handleLogin" class="col-md-offset-1 col-md-10">
      <div class="input-group input-group-lg">
        <span class="input-group-addon">
                      <i class="fa fa-user"></i>
                  </span>
        <input v-model="formData.username" class="form-control" placeholder="用户名" required>
      </div>
      <div class="input-group input-group-lg">
        <span class="input-group-addon">
                      <i class="fa fa-key"></i>
                  </span>
        <input v-model="formData.password" type="password" class="form-control" placeholder="密码" required>
      </div>
      <button type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
    </form>
  </div>
</div>
</template>

<script>
	import axios from "axios"
	export default {
		data(){
			return {
        formData:{
          username:"",
          password:""
        }
      }
		},
    methods:{
      // handleLogin () {
      //   //axios请求默认发的是json格式的数据

      //   // console.log(this.formData);
      //   // axios.post('/api/login',this.formData).then(res=>{
      //   //     console.log(res)
      //   // })

      //   // .catch(err=>{
      //   //   console.log("响应结果错误",err)
      //   // })


      //   var params = new URLSearchParams();
      //   params.append('tc_name', this.formData.tc_name);
      //   params.append('tc_pass', this.formData.tc_pass);
      //   axios.post('/api/login', params).then(res => {
      //     console.log(res)
      //   })
      // }



      handleLogin(){

        // console.log(this.formData)
        axios.post("http://api.circle.ink/v1/auth",this.formData).then(res=>{

          const status=res.status

          if(status===201){

            window.localStorage.setItem("bxg-token",JSON.stringify(res.data))
              

              this.$router.push(this.$route.query.redirect||"/")
          }
        })

      }

    }
	}
</script>

<style></style>