import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

require('@/assets/scss/style.scss')

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDiCDIZhblByScip8WMINmo3amEblSrIsM",
  authDomain: "vue-profile01.firebaseapp.com",
  databaseURL: "https://vue-profile01.firebaseio.com",
  projectId: "vue-profile01",
  storageBucket: "vue-profile01.appspot.com",
  messagingSenderId: "936346652601",
  appId: "1:936346652601:web:e6fa1cb50805458f56b068",
  measurementId: "G-WEQP88C4M3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
