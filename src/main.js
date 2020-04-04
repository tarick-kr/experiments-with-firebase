import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import vuelidate from 'vuelidate'
import firebase from 'firebase'

Vue.use(vuelidate)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyDFwOWKeUEylLM7o9T43_cZYLPMICWmb84',
  authDomain: 'experiments-with-firebase.firebaseapp.com',
  databaseURL: 'https://experiments-with-firebase.firebaseio.com',
  projectId: 'experiments-with-firebase',
  storageBucket: 'experiments-with-firebase.appspot.com',
  messagingSenderId: '414006598369',
  appId: '1:414006598369:web:45ceb132e3d7e0029eb5a0'
})
export const db = firebase.firestore()

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
