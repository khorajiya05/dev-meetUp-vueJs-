// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue';



Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

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
      databaseURL: "https://dev-meetup-97c52-default-rtdb.firebaseio.com",
    })
    this.$store.dispatch('loadedMeetups')
  }
}).$mount('#app')

