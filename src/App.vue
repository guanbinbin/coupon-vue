<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	html,body,#app{
		height:100%;
		width:100%;
		background-color: #fff;
	}
	body {
		
	}
</style>
