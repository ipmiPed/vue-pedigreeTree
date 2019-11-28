import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import animated from 'animate.css'//引入animate动画库,包含WOW.js
 
// 完整引入element ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//即element ui中的css
import locale from 'element-ui/lib/locale/lang/en' // lang i18n(国际化)

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'


import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

// set ElementUI lang to EN(国际化)
Vue.use(ElementUI, { locale },animated)
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// 阻止产生生产消息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,//将路由挂载到vue实例上,即注入路由
  store,
  // render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
  // 必须通过render函数方法来渲染外部引入的APP组件
  // es 6 的语法，表示 Vue 实例选项对象的 render 方法作为一个函数，接受传入的参数 h 函数，返回 h(App) 的函数调用结果
  render: h => h(App)
})
