<template>
	<div class="sort">
		<x-header :left-options="{showBack: true}" class="X_header">
	    	<span style="font-size:25px;line-height:50px;font-weight:bold">优惠分类</span>
    	</x-header>
    	<div class="blank"></div>
    	<flexbox style="margin:10px 0;padding:0 10px">
	      <flexbox-item :span="4">
	      	<div class="flex-demo">
	      		<img src="../../static/img/sort.png" alt="">
	      	</div>
	      </flexbox-item>
	      <flexbox-item>
	      	<div class="flex-demo">
	      		<h4 class="weui-media-box__title titlt-hb">券妈妈口令红包，每人可领</h4>
                <h4 class="titlt-sc">收藏，不定时更新</h4>
                <p class="bg">
                	<span class="qmm-icon">券妈妈</span> 
                	<span class="renshu">查看人数：19999</span>
                </p>
	      	</div>
	      </flexbox-item>
	    </flexbox>
	    <hr class="hr">
	    <flexbox style="margin:10px 0;padding:0 10px">
	      <flexbox-item :span="4">
	      	<div class="flex-demo">
	      		<img src="../../static/img/sort.png" alt="">
	      	</div>
	      </flexbox-item>
	      <flexbox-item>
	      	<div class="flex-demo">
	      		<h4 class="weui-media-box__title titlt-hb">券妈妈口令红包，每人可领</h4>
                <h4 class="titlt-sc">收藏，不定时更新</h4>
                <p class="bg">
                	<span class="qmm-icon">券妈妈</span> 
                	<span class="renshu">查看人数：19999</span>
                </p>
	      	</div>
	      </flexbox-item>
	    </flexbox>
	    <hr class="hr">
	    <flexbox style="margin:10px 0;padding:0 10px">
	      <flexbox-item :span="4">
	      	<div class="flex-demo">
	      		<img src="../../static/img/sort.png" alt="">
	      	</div>
	      </flexbox-item>
	      <flexbox-item>
	      	<div class="flex-demo">
	      		<h4 class="weui-media-box__title titlt-hb">券妈妈口令红包，每人可领</h4>
                <h4 class="titlt-sc">收藏，不定时更新</h4>
                <p class="bg">
                	<span class="qmm-icon">券妈妈</span> 
                	<span class="renshu">查看人数：19999</span>
                </p>
	      	</div>
	      </flexbox-item>
	    </flexbox>
	    <hr class="hr" >
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
		}
	}
</script>
<style scoped lang="less">
	@import '~vux/src/styles/1px.less';
	.sort{
		font-family: arial,"Hiragino Sans GB",Simhei,sans-serif;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.vux-header .vux-header-left{
		margin-top: 20px!important;
	}
	.qmm-icon{
		background: url("../../static/img/quan.png") left center no-repeat;
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
	.hr{
		border: 0;
	    background-color: #ddd;
	    height: 1px;
	    margin:0 8px;
	}
</style>