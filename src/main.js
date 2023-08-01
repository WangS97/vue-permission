import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
Vue.config.productionTip = false
import store from "@/store";
import {generatorRoutes} from "@/libs/utils";

router.beforeEach(async (to,from,next)=>{
  if(!store.state.hasAuth){//判断是否拥有权限
   await store.dispatch('setUserInfo')
    const newRoutes=generatorRoutes(store.state.userRouters)
    router.addRoutes(newRoutes)//动态添加权限
    next({path:to.path})
  }else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
