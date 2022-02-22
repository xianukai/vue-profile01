<template>
  <div id="app">
    <SideNav></SideNav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'
import Footer from '@/components/Footer.vue'
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  components: {
    SideNav,
    Footer
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setLoginUser(user)
      }
    })
  },
  methods: {
    ...mapActions(['setLoginUser'])
    // ...mapActions('setLoginUser')
  }
}

</script>

<style lang="scss">

</style>
