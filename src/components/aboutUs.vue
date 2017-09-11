<template>
	<div class="about">
		<x-header :left-options="{showBack: true}" style="background-color:#ff6666;height:70px;padding-top:20px;">
	    	<img src="../../static/img/qmm_logo.png" alt="" style="width:89px;height: 50px;">
    	</x-header>
    	<div class="cont">
	        <p>
	            券多多优惠券网:
	        </p>

	        <p>
	            邮箱：1054864949@qq.com
	        </p>
	        <p>
	            新浪微博：<a target="_blank" href="http://weibo.com/u/3972759126">http://weibo.com/u/3972759126</a>
	        </p>
	        <p class="qq">
	            QQ：1054864949
	        </p>
    </div>
    <div class="fcb">
        <img src="../../static/img/fcb.jpg" alt="" >
    </div>
    <div class="aboutUs_footer">
        <div class="company">prayone折扣优惠券个人网站(陕西西安)</div>
        <div class="copyright">Copyright&copy;2014-2017</div>
    </div>
	</div>
	
</template>
<script>
	import {XHeader} from 'vux'
	export default{
		components:{
			XHeader
		}
	}
</script>
<style scoped>
	body{
        color: #666;
        background: url("../../static/img/abus.gif") no-repeat ;
        z-index: -99!important;
        background-size: cover;
        background-attachment: fixed;
        }
	.cont{
		/*background-color: #fff;*/
		padding:50px 25px;
	}
	.aboutUs_footer {
            width: 100%;
            text-align: center;
            position: fixed;
            bottom: 20px;
            color: #333;
            font-size: 14px;
            line-height: 20px;
        }
        .fcb{
            width: 80%;
            margin:30px auto;
        }
        img{
        	width: 100%;
        	height: 100%;
        }
</style>