// import axios from 'axios'

const state = {
  thoughts: [
    {
      title: '自分の得意なことを見出して大事にする',
      text: '自分の得意なことを十分活かすことが、仕事や人生を豊かにする絶対条件であるよう感じます。',
      imgPath: 'img/dx.jpg',
    },
    {
      title: 'DX | ITスキルの習得の大事さ',
      text: '身に付けないと時代に適応できなくなっていくと感じました。',
      imgPath: 'img/dx.jpg',
    },
    {
      title: '貧富の差の拡大',
      text: '今の日本は「より富める者は富み、より貧しい者は貧しく」という道に全力で進んでいるように感じます。日々能力をアップデートできるよう意識しています。',
      imgPath: 'img/hinpu.webp',
    },
    {
      title: '生活習慣・健康',
      text: 'ベストに近いパフォーマンスを出すためにも健康を意識した習慣は大事だと考えるようになりました。',
      imgPath: 'img/dx.jpg',
    },
  ],
}

const getters = {
  allThoughts: (state) => state.thoughts
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