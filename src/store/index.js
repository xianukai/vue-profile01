import Vue from 'vue'
import Vuex from 'vuex'
import skillCards from './modules/skillCards'
import skillCards2 from './modules/skillCards2'
import learningMethods from './modules/learningMethods'
import hobbys from './modules/hobbys'
import thoughts from './modules/thoughts'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user
    }
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user)
    },
    login() {
      const google_auth_provider = new firebase.authGoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
  },
  modules: {
    skillCards,
    skillCards2,
    learningMethods,
    hobbys,
    thoughts,
  }
})
