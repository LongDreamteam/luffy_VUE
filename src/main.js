import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
// 在vue的全局变量中设置了 $axios=axios,以后每个组件使用时：this.$axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

// axios.defaults.headers['Content-Type'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

router.beforeEach(function (to, from, next) {
  if(to.meta.requireAuth){
    // 要去的url只有登陆成功后才能访问
    if (store.state.token) {
      next()
    } else {
      next({name: 'login',query: {backUrl: to.fullPath}})
    }
  }else{
    next()
  }
})
