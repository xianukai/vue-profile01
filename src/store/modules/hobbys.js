// import axios from 'axios'

const state = {
  hobbys: [
    {
      title: 'カフェ',
      text: 'タリーズが好きです',
      imgPath: 'img/hobby01.jpg',
    },
    {
      title: 'サッカー観戦・フットサル',
      text: '観戦はテレビ・youtubeで観ることが殆どです。日本代表の場合、酒井選手、岡崎選手、南野選手の活躍を期待しています。',
      text2: '外国人選手はロッベン選手が好きでした。',
      imgPath: 'img/hobby02.jpg',
    },
    {
      title: 'アニメ',
      text: 'シャフト系やFateコンテンツが好きです。',
      imgPath: 'img/hobby02.jpg',
    },
    {
      title: 'ジョギング・室内トレーニング',
      text: 'afterコロナを境に自室にヨガマットやアブローラーを購入。',
      imgPath: 'img/yogamat.jpg',
    },
    {
      title: 'ミニマリスト・コスパ意識',
      text: 'Youtubeを中心に情報収集し、ファイル→Google Driveのクラウドへ保存　服→ユニクロマストバイ商品統一、といったような形で実践しています。',
      imgPath: 'img/minimalist.jpg',
    },
  ],
}

const getters = {
  allHobbys: (state) => state.hobbys
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