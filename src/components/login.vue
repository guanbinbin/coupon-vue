<template>
    <div class="login">
    	  <h1>登录</h1>
        <group title="用户名">
          <x-input label-width="4em"  placeholder="请输入用户名" v-model="userName"></x-input>
        </group>
        <group title="密码" >
          <x-input label-width="4em" type="password"  placeholder="请输入密码" v-model="passWord"></x-input>
        </group>
        <div style="padding:15px;margin-top:20px;">
          <x-button type="primary" @click.native="login" style="width: 300px;height: 50px;">登录</x-button>
          <x-button type="warn" style="width: 300px;height: 50px;" @click.native="cancel" >取消</x-button>
        </div>
    </div>
</template>

<script>
import { XInput, Group, XButton } from 'vux'
import Api from '../api'

export default {
  components: {
    XInput,
    XButton,
    Group
  },
  name:'login',
  data () {
    return {
      userName:"",
      passWord:""
    }
  },
  methods: {
      login(){
        var that=this
        var data ={
          username:this.userName,
          password:this.passWord
        }
        var url=this.base_url+"/op/login"
       Api.post(url,data).then(function (rs) {
            if(rs.data.info){
                // sessionStorage.setItem("sid",rs.data.sid)
                // localStorage.setItem("username",that.userName)
                // vuex状态管理
               that.$store.dispatch('username',that.userName)
               that.$store.dispatch('sid',rs.data.sid)
                // console.log(that.userName)
                that.$router.push("/")

            }
       })
     },
     cancel(){
        this.$router.push("/")
     }


  }
}
</script>
<style scoped>
  	.login{
          height: 100%;
          background: url("http://ww1.sinaimg.cn/large/eccb7e56ly1fj43sj3isgj20u01hcqet.jpg") no-repeat !important;
          z-index: -99!important;
          background-size: cover;
          background-attachment: fixed;
    }
    h1{
      padding-top: 50px;
      margin-bottom: 100px;
      text-align: center;
      color:#888;
    }
    .login{
    }
    .red {
      color: red;
    }
    .green {
      color: green;
    }
</style>