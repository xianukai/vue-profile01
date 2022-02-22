// import axios from 'axios'

const state = {
  learningMethods: [
    {
      title: 'Udemy',
      text: 'Vue, Firebase, JavaScriptの学習に利用しています。',
      imgPath: 'img/udemy01.png',
    },
    {
      title: 'Youtube',
      text: '無料のプログラミングレクチャー動画などを利用しています。',
      imgPath: 'img/youtube.webp',
    },
    {
      title: '書籍',
      text: '電子書籍も含みます',
      imgPath: 'img/book.png',
    },
    {
      title: 'MENTA',
      text: '学習方法の相談などに利用しています。',
      imgPath: 'img/menta01.png',
    },
  ],
}

const getters = {
  allLearningMethods: (state) => state.learningMethods
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