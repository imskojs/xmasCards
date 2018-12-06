import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$globalData = {

  form: {
    friendType: '',
    message: '',
    date: null
  },

  data: {
    messages: [{ id: '1', friendType: 'friend', message: 'hi' }]
  }

}

new Vue({
  render: h => h(App),
}).$mount('#app')
