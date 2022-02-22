// import axios from 'axios'

const state = {
  skills: [
    {
      title: 'Scss',
      text: 'HTML, CSSの基本的なレイアウトやレスポンシブ対応の実装の経験があります。SCSSでのスタイルの制御や、メンテナンス性の高いclassの制御、mixinの活用を意識しています。BEMについてより理解を深めていきたいと思います。',
      imgPath: 'img/sass-1.svg',
    },
    {
      title: 'jQuery',
      text: 'jQueryによるアコーディオンの実装、ハンバーガーメニューの実装を行っています。',
      imgPath: 'img/jquery.svg',
    },
    {
      title: 'Gulp / npm-scripts',
      text: 'Node.js環境でのタスクランナーを利用経験があります。ゼロから自力でGulpfileやpackage.jsonのscripts部分を記述することはできませんが、内容をある程度理解しプロジェクトに合わせて開発環境を整備することはできます。',
      imgPath: 'img/gulp.svg',
    },
    {
      title: 'JavaScript',
      text: 'ES6に基づく記法やプログラミングの概念を勉強しています。',
      imgPath: 'img/javascript.svg',
    },
    {
      title: 'Vue.js / VueCLI-3 ',
      text: 'Vue独特の構文や単一ファイルコンポーネント(.vueファイル)や各ファイルの役割を掴みつつ個人開発を進めています。現在、Vuex, VueRouterやFirebaseとの連携について学習中です。',
      imgPath: 'img/vue-js-1.svg',
    },
    {
      title: 'React ',
      text: '動画教材で触ったことがあるのみですが、必要に応じて早急に身に付けていきます。',
      imgPath: 'img/react.png',
    },
    {
      title: 'Git',
      text: 'ローカルでのバージョン管理に使用しています。コマンドラインかVScode上で操作することが多いです。Github flowに基づいた多人数での開発経験は少ないためこちらは課題と捉えています。',
      imgPath: 'img/git.PNG',
    },
    {
      title: 'Photoshop',
      text: '画像のリサイズなどに使用しています。',
      imgPath: 'img/photoshop.PNG',
    },
  ]
}

const getters = {
  allSkills: (state) => state.skills
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