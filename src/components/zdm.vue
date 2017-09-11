<template>
	<div class="sort">
		  <x-header :left-options="{showBack: false}" class="X_header">
	    	<span style="font-size:25px;line-height:50px;font-weight:bold">券妈妈</span>
    	</x-header>
      <div class="blank"></div>


    	<div class="flex_list">
        <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/binggan.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">马奇新新 香草味 威化饼干 90g</h4>
                    <h4 class="titlt-sc">6.8元，可99-199</h4>
                    <p class="bg">
                      <span class="qmm-icon">天猫</span> 
                      <span class="renshu">查看人数：9000</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          <hr class="hr">

          <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/shouji.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">抢购！360 vizza手机4GB 32GB</h4>
                    <h4 class="titlt-sc">899元包邮</h4>
                    <p class="bg">
                      <span class="qmm-icon">京东</span> 
                      <span class="renshu">查看人数：7662</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          <hr class="hr">

          <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/pijiu.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">布鲁杰克 黑啤酒 500ml*6听</h4>
                    <h4 class="titlt-sc">19.9元(重口味)</h4>
                    <p class="bg">
                      <span class="qmm-icon">美团</span> 
                      <span class="renshu">查看人数：81522</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          <hr class="hr">

          <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/binggan2.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">香楠 五谷杂粮饼干 1120g+凑单品</h4>
                    <h4 class="titlt-sc">16.87元(3件7折)</h4>
                    <p class="bg">
                      <span class="qmm-icon">大众点评网</span> 
                      <span class="renshu">查看人数：45989</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          <hr class="hr">
          
          <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/kafei.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">雀巢 异世浓缩咖啡(浓烈)128g</h4>
                    <h4 class="titlt-sc">70元/赠雀巢摩卡巧克饮料216g</h4>
                    <p class="bg">
                      <span class="qmm-icon">1号店</span> 
                      <span class="renshu">查看人数：2019</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
      </div>


	    <div class="empty"></div>
        <!-- 底部按钮 -->
        <div class="bottom_tab">
           <tabbar>
            <tabbar-item  @click.native="link1" >
             <img slot="icon" src="../../static/img/shouye.png">
              <img slot="icon-active" src="../../static/img/sya.png">
              <span slot="label">首页</span>
            </tabbar-item>
             <tabbar-item  @click.native="link2" >
              <img slot="icon" src="../../static/img/yhj.png">
              <img slot="icon-active" src="../../static/img/yhja.png">
              <span slot="label">优惠券</span>
            </tabbar-item>
            <tabbar-item  @click.native="link3" >
              <img slot="icon" src="../../static/img/fl.png">
              <img slot="icon-active" src="../../static/img/fla.png">
              <span slot="label">福利</span>
            </tabbar-item>
            <tabbar-item  @click.native="link4" selected>
             <img slot="icon" src="../../static/img/zdm.png">
              <img slot="icon-active" src="../../static/img/zdma.png">
              <span slot="label">值得买</span>
            </tabbar-item>
           </tabbar>
        </div>
	</div>
</template>
<script>
	import {XHeader, Flexbox, FlexboxItem, Tabbar,TabbarItem} from 'vux'
	export default {
		components:{
			XHeader,
			Flexbox, 
			FlexboxItem, 
			Tabbar,
			TabbarItem
		},
    methods:{
         link1(){
            // this.$router.push({path: '/', replace: true})
            this.$router.replace('/')
          },
          link2(){
            // this.$router.push({path: '/quan', replace: true})
            this.$router.replace('/quan')
          },
          link3(){
            // this.$router.push({path: '/fuli', replace: true})
            this.$router.replace('/fuli')
          },
          link4(){
            // this.$router.push({path: '/zdm', replace: true})
            this.$router.replace('/zdm')
          },
    }
	}
</script>
<style>
  .vux-header .vux-header-left {
      margin-top: 20px!important;
  }
</style>
<style scoped lang="less">
	@import '~vux/src/styles/1px.less';
	img{
		width: 100%;
		height: 100%;
	}
	.text-center{
		text-align:center;
	}
  .flex-demo img{
    width:60px;
    height:60px;
  }
  .flex-demo a{
    font-size:14px;
    text-align:center;
  }
  .flex-demo1 img{
    width:100%;
    height:100%;
  }

  .vux-actionsheet-menu-default {
      color: #000;
      font-weight:700!important;
  }
  .qmm-icon{
    background: url("../../static/img/tm.png") left center no-repeat;
    background-size:25px 25px;
    padding-left:30px;
    height: 40px;
      line-height: 40px;
      display: inline-block;
  }
  .renshu{
    float: right;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      color: #999999;
      font-size: 13px;
      padding:3px 15px 0 0;
  }
  .titlt-sc{
    margin:10px 15px;
    color:red;
    
  }
</style>