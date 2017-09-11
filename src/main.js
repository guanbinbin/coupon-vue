// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios  from 'axios'
import VueAxios  from 'vue-axios'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/index'
import Search from './components/search'
import detil from './components/detil'
import login from './components/login'
import register from './components/register'
import aboutUs from './components/aboutUs'
import sort from './components/sort'
import quan from './components/quan'
import fuli from './components/fuli'
import zdm from './components/zdm'

Vue.use(VueRouter,VueAxios,axios)

var bus = new Vue()

const routes = [
{ 
	path: '/',
	component: Home
},{
  	path: '/search',
    component: Search
},{
  	path: '/detil',
    component: detil
},{
  	path: '/login',
    component: login
},{
  	path: '/register',
    component: register
},{
  	path: '/aboutUs',
    component: aboutUs
},{
    path: '/sort',
    component: sort
},{
    path: '/quan',
    component: quan
},{
    path: '/fuli',
    component: fuli
},{
    path: '/zdm',
    component: zdm
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  data:{
    // 空的实例放到根组件下，所有的子组件都能调用(非父子间通信)   
    Bus: new Vue() 
  }
}).$mount('#app-box')

