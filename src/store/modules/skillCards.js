// import axios from 'axios'

const state = {
  skillCards: [
    {
      title: 'My Portfolio Site',
      path: '/img/logo.png',
      statement: 'ポートフォリオサイト | 本サイトです。',
      link: 'https://keigom2020.github.io/vue-profile02/dist/',
      tags: [
        'VueCLI-03',
        'Vuex'
      ]
    },
    {
      title: 'Corporate Site',
      path: '/img/logo.png',
      statement: 'ポートフォリオです。',
      link: 'http://qlpt.sakura.ne.jp/corporate02/recruit/',
      tags: [
        'Gulp',
        'Sass'
      ]
    },
    {
      title: '会員制サイト',
      path: '/img/logo.png',
      statement: 'GoogleのBaasサービス「Firebase」を利用したログイン機能付き会員制サイトです。',
      link: 'http://qlpt.sakura.ne.jp/corporate02/',
      tags: [
        'VueCLI-03',
        'Firebase'
      ]
    },
  ],
}

const getters = {
  allSkillCards: (state) => state.skillCards
}

const actions = {

}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
}