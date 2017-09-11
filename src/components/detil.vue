<template>
	<div class="detil">
		<x-header :left-options="{showBack: true}" class="X_header">
	    	<span style="font-size:25px;line-height:50px;font-weight:bold">优惠详情</span>
    	</x-header>
        <div class="blank"></div>
    	<div class="hby">
    		<img src="../../static/img/hby.jpg" alt="">
    	</div>
    	 <div class="cont">
            <div class="discount">
                <p style="color: #999;">券妈妈</p>
                <p style="color: #444;">券妈妈口令红包，每人可领</p>
                <p style="color: red;">收藏，不定时更新!</p>
            </div>
            <div class="discount">
                <div class="discountInfo">
                    <span>优惠介绍</span>
                </div>
                <div class="item-content">
                    <p class="item-first">券妈妈口令已经更新啦！收藏此帖吧，不定时更新哦~</p>
                    <p>领取红包步骤：</p>
                    <p>打开券妈妈app⇒我的⇒口令红包⇒输入口令⇒领取红包。&nbsp;</p>
                </div>
            </div>
            <div class="discount">
                <div class="discountInfo">
                    <span>近期口令</span>
                </div>
                <div class="item-content">
                    <p class="item-first">5月16日0点-5月16日23:59口令：****<span style="color: rgb(255, 0, 0);">该口令安卓用户前往券妈妈个人中心-论坛中获取，ios用户可以让身边的朋友帮您下载券妈妈app获取哦！</span></p>
                    <p style="white-space: normal;">5月17日0点-5月17日23:59口令：517</p>
                    <p style="white-space: normal;margin: 8px 0;">5月18日0点-5月17日23:59口令：518</p>
                    <p style="white-space: normal;">5月20日0点-5月20日23:59口令：***<span style="color: rgb(192, 0, 0);"><span style="color: rgb(192, 0, 0);">（</span></span><span style="color: rgb(255, 0, 0);">该口令需要用户关注微信公众号：优惠神器，回复520,口令就会出现，检验真爱的时刻到来了</span><span style="color: rgb(192, 0, 0);">）</span></p>
                    <p style="white-space: normal ;margin-top: 10px">5月24日0点-5月24日23:59口令：易果生鲜（<span style="color: rgb(255, 0, 0);">数量有限先到先得</span>）</p>
                </div>
            </div>
            <div class="discount">
                <div class="discountInfo">
                    <span>往期口令</span>
                </div>
                <div class="item-content" style="border-bottom:0.3em solid #f0f3f4">
                    <p style="white-space: normal;">3月21日00点-3月21日23:59口令：白羊座</p><p style="white-space: normal;">3月22日00点-3月23日23:59口令：新势力</p><p style="white-space: normal;">3月25日00点-3月26日23:59口令：国足</p><p style="white-space: normal;">3月28日00点-3月29日23:59口令：春游</p><p style="white-space: normal;">4月01日00点-4月02日23:59口令：愚人节</p><p style="white-space: normal;">4月04日00点-4月05日23:59口令：清明</p><p style="white-space: normal;">4月11日00点-4月11日23:59口令：网易严选</p><p style="white-space: normal;">4月12日00点-4月12日23:59口令：天青色等烟雨</p><p style="white-space: normal;">4月13日00点-4月13日23:59口令：而我在等你</p><p style="white-space: normal;">4月14日00点-4月14日23:59口令：乐视414</p><p style="white-space: normal;">4月15日00点-4月15日23:59口令：彩虹</p><p style="white-space: normal;">4月16日00点-4月16日23:59口令：晴天</p><p style="white-space: normal;">4月17日00点-4月17日23:59口令：一路向北</p><p style="white-space: normal;">4月18日00点-4月18日23:59口令：苏宁</p><p style="white-space: normal;">4月19日00点-4月19日23:59口令：爱淘宝</p><p style="white-space: normal;">4月20日00点-4月20日23:59口令：谷雨</p><p style="white-space: normal;">4月25日00点-4月26日23:59口令：金牛座</p><p style="white-space: normal;">4月28日15点-4月28日23:59口令：网易考拉<br></p><p style="white-space: normal;">5月1日00点-5月1日23:59口令：五一</p><p style="white-space: normal;">5月05日0点-5月05日23:59口令：<span style="color: rgb(192, 0, 0);">立夏</span></p><p style="white-space: normal;"><span style="color: rgb(192, 0, 0);">5月09日0点-5月10日23:59口令：</span>大众点评 &nbsp;（数量有限，领完即止）</p><p style="white-space: normal;">5月12日0点-5月12日23:59口令：汶川</p><p style="white-space: normal;">5月14日0点-5月14日23:59口令：母亲我爱你</p><p><span style="color: rgb(192, 0, 0); margin:10px 0;">领取步骤:</span></p><p style="white-space: normal;"><span style="color: rgb(51, 51, 51); " >将券妈妈app升级到最新版本，打开券妈妈app-我的-口令红包-输入口令-领取红包。</span></p>
                </div>
            </div>
            <div class="discount">
                <div class="discountInfo">
                    <span>活动时间</span>
                </div>
                <div class="item-content">
                    <p>每天不定时更新，敬请关注</p>
                </div>
            </div>
        </div>
       
	</div>
</template>
<script>
	import {XHeader, Tabbar,TabbarItem} from 'vux'
	export default {
		components:{
			XHeader,
            Tabbar,
            TabbarItem
		}
	}
</script>
<style scope>
	img{
		width: 100%;
		height: 100%;
	}
	.headTop h2{
    height: 50px;
    line-height: 50px;
    color: #fff;
    }
    .header .headimg{
        width: 100%;
    }
    .discount{
        margin: 10px;
        padding-bottom: 5px;
        border-bottom: 3px solid #eee;
        color: #666;
        font-size: 14px;

    }
    .discountInfo{
        margin: 10px 0;
    }
    .discountInfo span{
        padding-left: 10px;
        border-left: 5px solid #f00;
    }
    .item-content{
        padding-left: 8px;
    }
    .item-first{
        margin-bottom: 10px;
    }
    .footer span{
        height:50px;
        line-height: 50px;
    }
    .footer i{
        display: inline-block;
        height: 20px;
        width: 20px;
        font-size: 16px;
        color: red;
    }
    .footer {
        margin-top: 44px;
    }
    .bigimg{
        width: 100px;
    }

</style>