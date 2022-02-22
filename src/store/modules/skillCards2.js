// import axios from 'axios'

const state = {
  portfolios: [
    {
      title: "JIN DEMO SITE",
      category: 'gulp',
      tags: [
        { skill: 'Gulp' },
        { skill: 'Scss' },
      ],
      path: 'img/port-thumb02.png',
      label: '有名なWordPressのテンプレートの模写です',
      deploy: 'FFFTP',
      link: 'http://qlpt.sakura.ne.jp/profile01/index.html',
      github: '',
    },
    {
      title: "MyPortfolioSite",
      category: 'vuecli-3',
      tags: [
        { skill: 'Vue' },
        { skill: 'VueCLI-3' },
        { skill: 'Firebase' },
      ],
      path: 'img/port-thumb03.PNG',
      label: 'このサイトです。ポートフォリオページのカードや技術タグはv-forやv-forの入れ子構造でdataオブジェクトから表示しています。',
      deploy: 'Firebase',
      link: 'http://qlpt.sakura.ne.jp/corporate02/recruit/',
      github: '',
    },
    {
      title: "TodoApp",
      category: 'laravel',
      tags: [
        { skill: 'Laravel' },
        { skill: 'PHP' }
      ],
      path: 'img/port-thumb01.png',
      label: '認証機能付きTODOアプリです',
      deploy: 'FFFTP',
      link: 'http://qlpt.sakura.ne.jp/corporate02/recruit/',
      github: '',
    },
    {
      title: "KM Holdings",
      category: 'gulp',
      path: 'img/port-thumb01.png',
      label: 'IT会社の模写サイトです',
      tags: [
        { skill: 'Gulp' },
        { skill: 'Scss' },
        { skill: 'Ejs' },
        { skill: 'jQuery' },
      ],
      deploy: 'FFFTP',
      link: 'http://qlpt.sakura.ne.jp/corporate02/recruit/',
      github: 'https://github.com/keigom2020/corporate02',
    },
    {
      title: "Wheather API App",
      category: 'react',
      tags: [
        { skill: 'React.js' },
        { skill: 'Firebase' },
      ],
      path: 'img/port-thumb06.png',
      label: 'APIを利用した天気アプリです',
      deploy: 'Firebase',
      link: 'http://qlpt.sakura.ne.jp/corporate02/recruit/',
    },
    {
      title: "profile site 2019",
      category: 'gulp',
      tags: [
        { skill: 'Gulp' },
        { skill: 'Scss' },
        { skill: 'Bootstrap' },
      ],
      path: 'img/port-thumb06.png',
      label: '未経験の頃に作成したプロフィールサイトです。HTML, CSSのみの造りからGulp, Scss環境へ移行させました。',
      deploy: 'FFFTP',
      link: 'http://qlpt.sakura.ne.jp/profile02/index.html',
      github: 'https://github.com/keigom2020/profile02',
    },
    {
      title: "CRM system",
      category: 'gulp',
      tags: [
        { skill: 'PHP' },
        { skill: 'MySQL' },
      ],
      path: 'img/port-thumb06.png',
      label: '未経験の頃に作成した認証付きCRUDアプリです。ID, パスワードは「yamada」「1234」です。',
      deploy: 'FFFTP',
      link: 'http://qlpt.sakura.ne.jp/CRM_system2/admin.php',
      github: '',
    },
  ]
}

const getters = {
  allSkillCards2: (state) => state.skillCards2
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