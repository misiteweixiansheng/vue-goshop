import Vue from "vue"
import App from "./App"

import Header from "./components/header/header.vue"
import router from "./router"
import store from "./vuex/store"

import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码'
  }
})
Vue.config.productionTip = false
Vue.component("Header",Header)

new Vue({
  render:(h)=>h(App),
  router,
  store
}).$mount("#app")