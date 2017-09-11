<template>
    <div class="register">
    	  <h1>注册</h1>
        <group title="用户名">
          <x-input label-width="4em"  placeholder="请输入用户名" v-model="username"></x-input>
        </group>
        <group title="密码" >
          <x-input label-width="4em"  placeholder="请输入密码" v-model="password"></x-input>
        </group>
         <group title="确认密码" >
          <x-input label-width="4em"  placeholder="请再次输入密码" v-model="password2"></x-input>
        </group>
        <div style="padding:15px;margin-top:20px;">
          <x-button type="primary" style="width: 300px;height: 50px;" @click.native="register">注册</x-button>
          <x-button type="warn" style="width: 300px;height: 50px;" @click.native="cancel">取消</x-button>
        </div>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
import Api from "../api"
export default {
    components: {
      XInput,
      XButton,
      Group,
      Cell
    },
    name:'register',
    data () {
      return {
        username:"",
        password:"",
        password2:""
      }
    },
    methods: {
        register(){
          var that=this
          var data= {
              username:this.username,
              password:this.password
          }
          var url=this.base_url+"/op/register"
          if(this.password==this.password2){
              Api.post(url,data).then(function (rs) {
                if (rs.data.info){
                    alert("恭喜你，注册成功！")
                    that.$router.push("/")
                }
             })
                } else {
                      alert("两次输入的密码不一致！")
                }
      },
      cancel(){
          this.$router.push("/")
      }
    }
}
</script>
<style scoped>
    .register{
            background: url("http://ww1.sinaimg.cn/large/eccb7e56ly1fj43sj3isgj20u01hcqet.jpg") no-repeat ;
            z-index: -99!important;
            background-size: cover;
            background-attachment: fixed;
            height: 100%;
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