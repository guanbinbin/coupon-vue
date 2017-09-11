<template>
	<div class="search">
		<x-header :left-options="{showBack: true}" class="X_header">
	    	<span style="font-size:25px;line-height:50px;font-weight:bold;">搜索优惠</span>
    	</x-header>
        <div class="blank"></div>
    	<div class="searchInfo">
            <div class="allSearch">
                大家都在搜
            </div>
            <ul>
                <li>京东</li>
                <li>唯品会</li>
                <li>聚美优品</li>
                <li>麦当劳</li>
                <li>乐蜂网</li>
                <li>苏宁易购</li>
                <li>小肥羊</li>
                <li>东方既白</li>
                <li>德克士</li>
                <li>易购</li>
                <li>当当</li>
                <li>真功夫</li>
            </ul>
        </div>
        <div class="hotul">
            <div class="allSearch">
                热门商家
            </div>
            <flexbox class="flexbox">
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd1.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd2.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd3.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd1.png" alt=""></div></flexbox-item>
    	    </flexbox>
    	     <flexbox>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd2.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd1.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd2.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd3.png" alt=""></div></flexbox-item>
    	    </flexbox>
    	     <flexbox>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd2.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd1.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd2.png" alt=""></div></flexbox-item>
    	      <flexbox-item><div class="flex-demo"><img src="../../static/img/jd3.png" alt=""></div></flexbox-item>
    	    </flexbox>
        </div>
        <!-- 底部 -->
        <div class="empty"></div>
        <div class="bottom_tab">
    	       <tabbar>
    		        <tabbar-item  link="/" selected>
    		         <img slot="icon" src="../../static/img/shouye.png">
    		          <img slot="icon-active" src="../../static/img/sya.png">
    		          <span slot="label">首页</span>
    		        </tabbar-item>
    		         <tabbar-item link="/">
    		          <img slot="icon" src="../../static/img/yhj.png">
    		          <img slot="icon-active" src="../../static/img/yhja.png">
    		          <span slot="label">优惠券</span>
    		        </tabbar-item>
    		        <tabbar-item link="/">
    		          <img slot="icon" src="../../static/img/fl.png">
    		          <img slot="icon-active" src="../../static/img/fla.png">
    		          <span slot="label">福利</span>
    		        </tabbar-item>
    		        <tabbar-item link="/">
    		         <img slot="icon" src="../../static/img/zdm.png">
    		          <img slot="icon-active" src="../../static/img/zdma.png">
    		          <span slot="label">值得买</span>
    		        </tabbar-item>
    		       </tabbar>
    	</div>
	</div>
</template>
<script>
	import {XHeader,Tabbar,TabbarItem,Flexbox, FlexboxItem} from 'vux'
	export default {
		components:{
			XHeader,
			Tabbar,
	    TabbarItem,
	    Flexbox, 
	    FlexboxItem
		}
	}
</script>
<style scoped>
		img{
			width: 100%;
			height: 100%;
		}
		.hotul{
			background-color: #fff;
		}
	 .header .input {
            width: 70%;
            display: inline-block;

        }
        .weui-cell__bd{
            border: 1px solid #ccc;
            border-radius: 5px;
            height: 30px;
            padding: 5px 10px 0 10px;
            background-color: #eee;
            overflow: hidden;
        }
        .weui-cell__bd i{
            float: right;
            font-size: 20px;
            color: #777;
        }
         .allSearch{
            background-color: #eee;
            height: 45px;
            line-height: 45px;
            padding-left: 16px;
            font-weight: 400;
            color: #444;
        }
        .searchInfo ul
        {
            background-color: #f9f9f9;
            padding: 25px 0 5px 15px;
        }
        .searchInfo ul li{
            border: 1px solid #dedede;
            height: 26px;
            line-height: 26px;
            width: inherit;
            border-radius: 14px;
            text-align: center;
            padding: 0 15px;
            display: inline-block;
            margin-right: 8px;
            margin-bottom: 12px;
            max-width: 140px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px!important;
        }
        .hotInfo{
            overflow: hidden;
        }
        .flex-demo{
            padding: 30px 0;
            border: 1px solid #eee;
            margin-top: 5px;
        }
       .grid-center {
		  display: block;
		  text-align: center;
		  color: #666;
	}
    .weui-tabbar{
        position:fixed;
    }
    .bottom_tab{
        position:relative;
        margin-top:50px;
    }

</style>