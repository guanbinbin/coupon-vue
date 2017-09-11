<template>
	<div class="sort">
		<x-header :left-options="{showBack: false}" class="X_header">
	    	<span style="font-size:25px;line-height:50px;font-weight:bold">券妈妈</span>
    	</x-header>
      <div class="blank"></div>
      
      <div class="top_div">
        <div class="aj-color-border" style="background-color: rgb(255, 183, 0);">
                </div>
        <div class="aj-color-title">
            <span>今日精选</span> <a href="javascript:" onclick="javascript:0" class="aj-more" data="12" style="color: rgb(255, 183, 0);"><span>更多福利</span> <i class="qmm-icon-chevron-right">
                </i></a>
        </div>
      </div>
       <div class="flex_list">
        <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/tianmao.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">天猫99品牌狂欢通用红包</h4>
                    <h4 class="titlt-sc">整点开抢千万红包雨</h4>
                    <p class="bg">
                      <span class="qmm-icon">天猫</span> 
                      <span class="renshu">查看人数：9000</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/jdd.png" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">京东超市9.9周年庆</h4>
                    <h4 class="titlt-sc">抢99减50元神券/99任选6件</h4>
                    <p class="bg">
                      <span class="qmm-icon">京东</span> 
                      <span class="renshu">查看人数：7662</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/meituan.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">5-200元美食团购优惠券汇总</h4>
                    <h4 class="titlt-sc">8月30日更新 建议收藏</h4>
                    <p class="bg">
                      <span class="qmm-icon">美团</span> 
                      <span class="renshu">查看人数：81522</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
      </div>
      <div class="top_div">
        <div class="aj-color-border" style="background-color: rgb(255, 183, 0);">
                </div>
        <div class="aj-color-title">
            <span>抢红包</span> <a href="javascript:" onclick="javascript:0" class="aj-more" data="12" style="color: rgb(255, 183, 0);"><span>更多福利</span> <i class="qmm-icon-chevron-right">
                </i></a>
        </div>
      </div>
       <div class="flex_list">
        <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/tianmao.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">天猫99品牌狂欢通用红包</h4>
                    <h4 class="titlt-sc">整点开抢千万红包雨</h4>
                    <p class="bg">
                      <span class="qmm-icon">天猫</span> 
                      <span class="renshu">查看人数：9000</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/jdd.png" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">京东超市9.9周年庆</h4>
                    <h4 class="titlt-sc">抢99减50元神券/99任选6件</h4>
                    <p class="bg">
                      <span class="qmm-icon">京东</span> 
                      <span class="renshu">查看人数：7662</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          <flexbox style="margin:10px 0;padding:0 10px">
            <flexbox-item :span="4">
              <div class="">
                <img src="../../static/img/meituan.jpg" alt="">
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="ziti">
                <h4 class="weui-media-box__title titlt-hb">5-200元美食团购优惠券汇总</h4>
                    <h4 class="titlt-sc">8月30日更新 建议收藏</h4>
                    <p class="bg">
                      <span class="qmm-icon">美团</span> 
                      <span class="renshu">查看人数：81522</span>
                    </p>
              </div>
            </flexbox-item>
          </flexbox>
          
      </div>
      

        <!-- 底部按钮 -->
	    <div class="empty"></div>
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
            <tabbar-item  @click.native="link3" selected>
              <img slot="icon" src="../../static/img/fl.png">
              <img slot="icon-active" src="../../static/img/fla.png">
              <span slot="label">福利</span>
            </tabbar-item>
            <tabbar-item  @click.native="link4">
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
<style scoped lang="less">
	@import '~vux/src/styles/1px.less';
	img{
		width: 100%;
		height: 100%;
	}
	.text-center{
		text-align:center;
	}
  .aj-color-title {
    padding-left: 14px;
    line-height: 40px;
    font-size: 14px;
    color: #666;
  }
  .aj-more {
      float: right;
      margin-right: 10px;
  }
  .top_div{
    position: relative;
  }
  .aj-color-border {
    position: absolute;
    width: 8px;
    height: 30px;
    top: 5px;
    left: 0;
    background-color: lightblue;
}
 .flex-demo,.flex-demo1 {
    text-align: center;  
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
    background: url("../../static/img/jdd1.png") left center no-repeat;
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