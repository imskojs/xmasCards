import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$globalData = {

  form: {
    friendType: '',
    message: ''
  },

  data: {
    messages: []
  }

}

new Vue({
  render: h => h(App),
}).$mount('#app')
