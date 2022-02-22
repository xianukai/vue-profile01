<template>
  <transition mode="out-in" name="fade" appear>
    <div id="portfolio">
      <h2 class="heading__lv2 inner">
        <span>Portfolio</span>
      </h2>

      <div class="inner">
        <div class="filters inner">
        <span 
          class="filter" 
          :class="{ active: currentFilter === 'ALL' }" 
          @click="setFilter('ALL')"
        >
          すべて
        </span>
        <span 
          class="filter" 
          :class="{ active: currentFilter === 'vuecli-3' }" 
          @click="setFilter('vuecli-3')"
        >
          #VueCLI-3
        </span>
        <span 
          class="filter" 
          :class="{ active: currentFilter === 'gulp' }" 
          @click="setFilter('gulp')"
        >
          #Gulp
        </span>
        <span 
          class="filter" 
          :class="{ active: currentFilter === 'laravel' }" 
          @click="setFilter('laravel')"
        >
          #Laravel
        </span>
        <div 
          class="filter" 
          :class="{ active: currentFilter === 'react' }" 
          @click="setFilter('react')"
        >
          #React
        </div>
      </div>

      <transition-group 
        class="projects" 
        name="projects"
      >
        <div
          class="card__item" 
          :key="portfolio.title" 
          v-for="portfolio in activePortfolios"
        >
          <!-- <div class="project-image-wrapper">
            <div class="gradient-overlay"></div>
            <div class="circle">
              <span class="project-title">{{portfolio.title}}</span>
              <h3 class="heading__lv3">
                {{ portfolio.title }}
              </h3>
            </div>
          </div> -->

          <h3 class="heading__lv3">
            {{ portfolio.title }}
          </h3>
          <p>使用技術</p>
          <ul class="tag__box">
            <li
              class="tag"
              v-for="(tag, i) in portfolio.tags"
              :key="i"
            >
              {{ tag.skill }}
            </li>
          </ul>
          <div class="img__box">
            <img 
            :src="portfolio.path" 
            alt=""
          >
          </div>
          <a 
            :href="portfolio.link" 
            target="_blank" 
            rel="noopener"
            class="link__portfolio btn"
          >
            SHOW SITE
          </a>
          <div class="statement">
            <p>詳細欄</p>
            <p>
              {{ portfolio.label }}
            </p>
          </div>
          <div>
            <p>デプロイ手段</p>
            <div>
              {{ portfolio.deploy }}
            </div>
          </div>
          <a 
            :href="portfolio.github" 
            target="_blank" 
            rel="noopener"
            class="link__github btn"
          >
            SHOW Github
          </a>
        </div>
      </transition-group>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Portfolio2',
  data() {
    return {
      currentFilter: 'ALL',
      portfolios: [
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
          link: 'https://vue-profile01.web.app/portfolio2',
          github: 'https://github.com/keigom2020/vue-profile01',
        },
        {
          title: "VideoLearning",
          category: 'laravel',
          tags: [
            { skill: 'Laravel' },
            { skill: 'PHP' },
            { skill: 'MySQL' },
            { skill: 'AWS' },
          ],
          path: 'img/port-thumb07.png',
          label: 'Udemyのような動画を再生して学習するWEBアプリを想定して作成中です。動画の表示はVimeoという外部サイトのサンプル動画のURLをデータベースに格納し、そこから読み込みこみをしています。AWSのEC2サーバにLaravelのプロジェクトを配置しデータベースはRDSのMySQLを使用しています。https化もAWS上で行っております。',
          deploy: 'AWS',
          link: 'https://kemmy.work/top',
          github: 'https://github.com/keigom2020/video_learning',
        },
        {
          title: "KM Holdings",
          category: 'gulp',
          path: 'img/port-thumb01.PNG',
          label: 'IT会社の模写サイトです。コードの実装はオリジナルです。',
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
          title: "Weather API App",
          category: 'react',
          tags: [
            { skill: 'React.js' },
            { skill: 'Firebase' },
          ],
          path: 'img/port-thumb05.PNG',
          label: '【模写】APIを利用した天気アプリです',
          deploy: 'Firebase',
          link: 'https://react-weather-app-a7f29.web.app/',
          github: 'https://github.com/keigom2020/react-weather-app',
        },
        // {
        //   title: "profile site 2019",
        //   category: 'gulp',
        //   tags: [
        //     { skill: 'Gulp' },
        //     { skill: 'Scss' },
        //     { skill: 'jQuery' },
        //     { skill: 'Bootstrap' },
        //   ],
        //   path: 'img/port-thumb06.PNG',
        //   label: '未経験の頃に作成したプロフィールサイトです。HTML, CSSのみの造りからGulp, Scss環境へ移行させました。',
        //   deploy: 'FFFTP',
        //   link: 'http://qlpt.sakura.ne.jp/profile02/index.html',
        //   github: 'https://github.com/keigom2020/profile02',
        // },
        
      ]
    }
  }, 
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
  },
  computed: {
    activePortfolios() {
      return this.portfolios.filter(portfolio => {
        return this.currentFilter === portfolio.category || this.currentFilter === 'ALL'
      })
    },
    ...mapGetters(['allSkillCards2']),
  },
  
}
</script>

<style lang="scss" >

#portfolio {
  text-align: left;
  margin-top: 80px;
  color: #2c3e50;

  .heading__lv2 {
    span {
      background-color: rgba(255, 255, 255, 0.6);
      padding: 1rem;
      border-radius: 4px;
      box-shadow:0px 2px 8px lightgrey;
    }
    margin-bottom: 3rem;
  }
  .heading__lv3 {
    // min-height: 2em;
    // height: 2rem;
    text-indent: -1rem;
    padding-left: 1rem;
    font-size: 1.8rem;
    text-align: left;
    margin-bottom: 1rem;

    &:before {
      content: "";
      margin-right: 10px;
      border-right: 5px solid #17a2b8;
    }
  }

  .img__box {
    margin-bottom: 20px;
  }
}

.card__item {
  transition: all .35s ease-in-out;
  box-shadow:0px 2px 8px lightgrey;
  border-radius:3px;
  width: calc((100% / 3) - 14px);
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px 20px 10px;
  margin-right: 20px;
  margin-bottom: 20px;

  &:nth-child(3n) {
    margin-right: 0;
  }
}

.statement {
  background-color: #fff;
  margin: 20px 0 20px;
  padding: 10px;
  border-radius: 4px;
}

// html,body {
//   margin:0;
//   font-family: 'Dawning of a New Day', cursive;
// }

.title-container {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.title {
  font-family: 'Dawning of a New Day', cursive;
  font-size:30pt;
  font-weight:normal;
}

.project-title {
  font-size:16pt  
}

.wrapper__date-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.filters {
  display: flex;
}

.filter {
  font-family:arial;
  padding: 6px 6px;
  cursor:pointer;
  border-radius: 6px;
  transition: all 0.35s;

  // background-color: #057bde;
  background-color: rgba(255, 255, 255, 0.8);
  // color: #fff;
  color: #17a2b8;
  padding: 16px 12px 12px;
  margin-right: 20px;
  text-align: center;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
}

.filter.active {
  box-shadow:0px 1px 3px 0px #000000;
  // background-color: #3f51b5;
  background-color: #2c3e50;
  color: #fff;
}

.filter:hover {
  opacity: 0.7;
} 

.projects {
  // margin-top:25px;
  margin: 25px 0 0;
  display:flex;
  flex-wrap: wrap;
  // justify-content: center;
}

.link__portfolio {
  background-color: #17a2b8;
  border: 1px solid #17a2b8;
  font-weight: bold;

  &:hover {
    color: #17a2b8;
    background-color: #fff;
    border: 1px solid #17a2b8;
  }
}
.link__github {
  background-color: #2c3e50;
  color: #fff;

  &:hover {
    color: #17a2b8;
  }
}

#portfolio {
  .tag__area {
    margin: 0 0;
  }
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity:0;
}

.projects-leave-to{
  transform: translatey(30px);
  opacity:0;
}

.projects-leave-active {
  position: absolute;
  z-index:-1;
}

.circle {
  text-align:center;
  // position:absolute;
  // bottom:-38px;
  // left:40px;
  width:100px;
  height:100px;
  // border-radius:50px;
  // border:1px solid black;
  display:flex;
  box-shadow: 0px -4px 3px 0px #494d3257;
  justify-content:center;
  align-items:center;
  background-color:#fff;
  // box-shadow:0px -3px 3px #484848a6;
}

@media screen and (max-width: 767px){
  .card__item {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
  .filters {
    flex-wrap: wrap;
  }
  .filter {
    width: 29%;
    margin-bottom: 10px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
</style>