import Vue from 'vue'
import App from './App.vue'
import { $globalData } from './globalData'

Vue.config.productionTip = false
Vue.prototype.$globalData = $globalData;

new Vue({
  render: h => h(App),
}).$mount('#app')
