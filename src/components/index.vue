<template>
	<div class="index">
		<!-- 头部 -->
	    <x-header :left-options="{showBack: false}" class="X_header">
	    	<img src="../../static/img/qmm_logo.png" alt="" style="width:89px;height: 50px;">
	    	<a slot="right" style="margin-top:20px;">
	    		<img src="../../static/img/ss.png" style="width:22px;height: 22px;" alt="" @click="toSearch">
	    		<img src="../../static/img/xm.png" style="width:22px;height: 22px;margin-left:15px;"   @click="showSheet" alt="">
	    	</a>
	    </x-header>
	    <div class="blank"></div>
		<!-- 轮播图 -->
	    <swiper :list="demo03_list" auto   dots-class="custom-bottom" dots-position="center"></swiper>
	    <!-- 九宫格 -->
    	<flexbox style="margin:10px 0" class="fc" >
	        <flexbox-item v-if="index<5" v-for="(sort,index) in sorts">
	        	<div class="flex-demo">
	        		<img :src="sort.img" alt="">
	        		<a href="" class="fc">{{sort.name}}</a>
	        	</div>
	        </flexbox-item>
    	</flexbox>
    	<flexbox style="margin:10px 0" >
    		<flexbox-item v-if="index>=5" v-for="(sort,index) in sorts" >
	        	<div class="flex-demo">
	        		<img :src="sort.img" alt="">
	        		<a href="" class="fc">{{sort.name}}</a>
	        	</div>
	        </flexbox-item>
    	</flexbox>
    	<!-- 中间三个图片 -->
    	<flexbox style="margin:15px 0; background-color: #eee;padding-top:7px;">
	      <flexbox-item>
	         <div class="flex-demo1">
	         	<img src="../../static/img/lcj.png" alt="">
	         </div>
	      </flexbox-item>
	      <flexbox-item>
	         <div class="flex-demo1">
	            <img src="../../static/img/liwu.jpg" alt="">
	          </div>
	      </flexbox-item>
	      <flexbox-item>
	         <div class="flex-demo1">
	            <img src="../../static/img/zb.png" alt="">
	         </div>
	      </flexbox-item>
	    </flexbox>
		<!-- 下面列表 -->
		<div class="flex_list">
			<flexbox style="margin:10px 0;padding:0 10px;" v-for="item in items">
		      <flexbox-item :span="4">
		      	<div class="" @click="linkDetil">
		      		<img src="../../static/img/sort.png" alt="">
		      	</div>
		      </flexbox-item>
		      <flexbox-item>
		      	<div class="ziti">
		      		<h4 class="weui-media-box__title titlt-hb">{{item.title}}</h4>
	                <h4 class="titlt-sc">{{item.reason}}</h4>
	                <p class="bg">
	                	<span class="qmm-icon">券妈妈</span> 
	                	<span class="renshu">查看人数：{{item.buy_num}}</span>
	                </p>
		      	</div>

		      </flexbox-item>
		    </flexbox>


		</div>
	    <hr class="hr">
	    
	    <div class="empty"></div>
	    <!-- 底部按钮 -->
	    <div class="bottom_tab">
	       <tabbar>
		        <tabbar-item  @click.native="link1" selected>
		         <img slot="icon" src="../../static/img/shouye.png">
		          <img slot="icon-active" src="../../static/img/sya.png">
		          <span slot="label">首页</span>
		        </tabbar-item>
		         <tabbar-item  @click.native="link2">
		          <img slot="icon" src="../../static/img/yhj.png">
		          <img slot="icon-active" src="../../static/img/yhja.png">
		          <span slot="label">优惠券</span>
		        </tabbar-item>
		        <tabbar-item  @click.native="link3">
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
	    <!-- 组件需要的内容 -->
		<actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="true" @on-click-menu="sheetItemClick"></actionsheet>
	</div>
</template>
<script >
	import { 
		Panel,
		Swiper,
		Tabbar,
	    TabbarItem,
	    XHeader, 
	    Actionsheet, 
	    TransferDom, 
	    ButtonTab, 
	    ButtonTabItem,
	    Grid, 
	    GridItem,
	    Flexbox, 
	    FlexboxItem
	} from 'vux'
    import Api from '../api'

			
	export default {
	  components: {
		Panel,
	    Swiper,
	    Tabbar,
    	TabbarItem,
    	XHeader,
    	Actionsheet, 
    	TransferDom, 
    	ButtonTab, 
    	ButtonTabItem,
    	Grid, 
    	GridItem,
    	Flexbox, 
    	FlexboxItem
	  },
	  name:"index",
	  data () {
	    return {
	    	sorts:"",
	    	items:"",
	    	show4:false,
	      	demo03_list: [],
	        menus1: {
	       		menu1: '登录',
	       		menu2: '注册',
	       		menu3: '关于我们',
		        menu4: '取消'
		    },
    	}
    },
   	created(){
       	this.get_index_pic()
       	this.get_category()

	  	const imgList = [
		  'http://ww1.sinaimg.cn/large/eccb7e56ly1fj42utheswj20br0500sv.jpg',
		  'http://ww1.sinaimg.cn/large/eccb7e56ly1fj42vdb78kj20br050wei.jpg',
		  'http://ww1.sinaimg.cn/large/eccb7e56ly1fj42vpv1bcj20br050q31.jpg'
		]
		const demoList = imgList.map((one, index) => ({
		  url: 'javascript:',
		  img: one
		}))
		this.demo03_list = demoList
	},
	  methods: {
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
	  	get_index_pic(){
	  		let that=this
	  		let pag=1
	  		let pic_url = this.base_url+"/rs/event_category",data = {page:1,size:10}
	   	 	Api.get(pic_url,data).then(function (rs) {
	            if(rs.data){
	            	that.sorts=rs.data.rows;
	            	console.log(JSON.stringify(that.sorts))
	            }
	       	})
	       
	  	},
	  	get_category(){
	  		let that=this
	  		let category_url = this.base_url+"/rs/coupons_list",data = {page:1,size:10}
	   	 	Api.get(category_url,data).then(function (rs) {
	            if(rs.data){
	            	that.items=rs.data.rows;
	            }
	       	})
	   	 },
	    onSwiperItemIndexChange (index) {
	        console.log('demo item change', index)
	    },
	    onItemClick () {
	      console.log('on item click')
	    },
	    showSheet(){
	    	let sid = sessionStorage.getItem("sid")
	    	let username = localStorage.getItem("username")
	    	console.log(username)
	  		if(sid&&sid.length>11){
	  			this.msg = sid
	  			this.menus1 = {
					menu1: "欢迎"+username+"!",
		       		menu2: '我的优惠券',
		       		menu3: '关于我们',
			        menu4: '退出登录',
			        menu5: '取消'
	  			}
	  		}
	    		this.show4 = true
	    },
	    toSearch(){
	    	this.$router.push("/search")
	    },
	    sheetItemClick(menuKey,menuItem){
	    	if(menuItem=="登录"){
	    		this.$router.push("/login")
	    	}else if(menuItem=="注册"){
	    		this.$router.push("/register")
	    	}else if(menuItem=="我的优惠券"){
	    		this.$router.push("/sort")
	    	}else if(menuItem=="关于我们"){
	    		this.$router.push("/aboutUs")
	    	}else if(menuItem=="退出登录"){
	    		localStorage.removeItem('username');
	    		sessionStorage.removeItem('sid');
	    		this.menus1 = {
					menu1: '登录',
	       			menu2: '注册',
	       			menu3: '关于我们',
		        	menu4: '取消'
	  			}
	    	}else if(menuItem=="取消"){
	    		this.show4 = false
	    	}
	    },
	    linkDetil(){
	    	this.$router.push("/detil")
	    }
	  },
	}
</script>
<style lang="css">
	.fc{
		color: #555;
		font-size: 12px;
	}
	.index{
		position: relative;
	}
	.empty{
		height: 58px;
	}
	.weui-tabbar{
		position:fixed!important;
	}
	.X_header{
		width: 100%!important;
		background-color:#ff6666!important;
		height:70px!important;
		padding-top:20px!important;
		position:fixed!important;
		left:0!important;
		top:0!important;
		z-index: 1000!important;
	}
	.blank{
		height: 70px;
	}
	.flex_list .vux-flexbox {
       width: 93%!important; 
	}
	.ziti{
		font-family: arial,"Hiragino Sans GB",Simhei,sans-serif;
	}
	.hr{
		border: 0;
	    background-color: #ddd;
	    height: 1px;
	    margin:0 8px;
	}
</style>
<style lang="less" scoped>
	img{
		width:100%;
		height:100%;
	}
	
	@import '~vux/src/styles/1px.less';
	.grid-center {
	  display: block;
	  text-align: center;
	  color: #666;
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
	
	
</style>