// eslint-disable-next-line no-unused-vars
import Vue, { createAppp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase/app'
import router from './routes'
import { store } from './store'
import DateFilter from './filters/date'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'



Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBPHh2TbHCpQZq-uLOKn-r3vKoBXXqEvxc",
      authDomain: "dev-meetup-97c52.firebaseapp.com",
      projectId: "dev-meetup-97c52",
      storageBucket: "dev-meetup-97c52.appspot.com",
    })
  }
}).$mount('#app')

