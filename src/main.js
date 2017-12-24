// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//注册插件
Vue.use(ElementUI)

Vue.component('grid',{

})

Vue.config.productionTip = false
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  router: router,
  components: { App }
})
