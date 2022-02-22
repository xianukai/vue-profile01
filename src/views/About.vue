<template>
  <transition mode="out-in" name="fade" appear>
    <div id="about" @mousemove="mousemove">
      <h2 class="heading__lv2 inner">
        About
        <br>
        <span class="ruby">自己紹介</span>
      </h2>
      <section class="area">
        <div class="inner">
          <h3 class="heading__lv3">Profile</h3>

          <div class="column">
            <div class="column__child">
              <img 
                src="img/me01.jpg" 
                alt=""
              >
            </div>
            <div class="column__child">
              <p>
                WEB制作会社のコーダーとして入社。コーポレートサイトやキャンペーンサイトの更新業務を中心に行っています。<br>
                現在はCMSを触ることが多く、公益法人のプレスリリースに伴うWEBサイトの更新やSNSアカウント管理業務を中心に行っています。<br>
                将来的にWEBサービスを開発・運用をトータルでできるようになりたいと考えており、バックエンドやインフラの領域の業務にも携わりたいと考えています。<br>
                プライベートではLaravelとAWSを中心としたフレームワークでの開発ができるよう学習に時間を充てています。
              </p>
            </div>
          </div>
        </div>
      </section>
        
      <section class="area">
        <div class="inner">
          <h3 class="heading__lv3">Skills | 使用技術・言語</h3>
          <!-- <ul class="list__box inner">
            <li
              class="list"
              v-for="(skill, i) in skills"
              :key="i"
            >
              <p>{{ skill.title }}</p>

              <div class="img__box">
                <img 
                  :src="skill.imgPath" 
                  alt=""
                >
              </div>

              <p>
                {{ skill.text }}
              </p>
            </li>
          </ul> -->

          <div class="skills">
            <Product
              v-for="product in skills"
              :key="product.color"
              :product="product"
            />
          </div>
        </div>
      </section>

      <section class="area" id="learningMethod">
        <div class="inner">
          <h3 class="heading__lv3">Learning method | 学習方法</h3>
          <ul class="list__box col__3">
            <li
              class="list"
              v-for="(learningMethod, i) in allLearningMethods"
              :key="i"
            >
              <p>{{ learningMethod.title }}</p>

              <div class="img__box">
                <img 
                  :src="learningMethod.imgPath" 
                  alt=""
                >
              </div>

              <p>
                {{ learningMethod.text }}
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section class="area" id="hobbys">
        <div class="inner">
          <h3 class="heading__lv3">Hobbys | 趣味</h3>
          <ul class="list__box col__4">
            <li
              class="list"
              v-for="(hobby, i) in allHobbys"
              :key="i"
            >
              
              <div class="list__top">
                <div class="img__box inview">
                  <img 
                    :src="hobby.imgPath" 
                    alt=""
                    class="img-zoom"
                  >
                </div>
                <p class="list__title">{{ hobby.title }}</p>
              </div>
              <div class="list__bottom">
                <p>
                  {{ hobby.text }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section class="area" id="thought">
        <div class="inner">
          <h3 class="heading__lv3">Thought | 最近考えること・関心ごと</h3>
        <ul class="list__box col__4">
          <li
            class="list"
            v-for="(thought, i) in allThoughts"
            :key="i"
          >
            <div class="list__top">
              <div class="img__box inview hover-darken">
                <img 
                  :src="thought.imgPath" 
                  alt=""
                  class="img-zoom"
                >
              </div>
              <p class="list__title">{{ thought.title }}</p>
            </div>
            <div class="list__bottom">
              <p>
                {{ thought.text }}
              </p>
            </div>
          </li>
        </ul>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
import Product from '../components/Product'
import { mapGetters } from 'vuex'

  export default {
    name: 'about',
    components: {
      Product
    },
    data() {
      return {

        skills: [
          {
            title: 'Laravel / PHP / MySQL',
            color: 'grey',
            bgtext: 'Laravel',
            src: 'img/laravel.png',
            text: 'WEBサービスのポートフォリオをLaravelで作成しました。ルーティングやデータベースの構成やリレーションを考えるのに苦戦しました。一般ユーザ用と管理者用のアカウントを区別するためにRoleの機能を利用しています。',
            percentage: '20',
          },

          {
            title: 'AWS',
            color: 'orange',
            bgtext: 'AWS',
            src: 'img/aws_logo.png',
            text: 'ポートフォリオの開発・デプロイするために、EC2, RDS, Route53, IAMなどを使用しました。今後LambdaやS3なども活用していきたいと思っています。',
            percentage: '20',
          },

          {
            title: 'Git',
            color: 'black',
            bgtext: 'Git',
            src: 'img/git.png',
            text: 'ローカルでのバージョン管理に使用しています。コマンドラインかVScode上で操作することが多いです。Github flowに基づいた多人数での開発経験は少ないためこちらは課題と捉えています。',
            percentage: '30',
          },

          {
            title: 'Linux',
            color: 'grey',
            bgtext: 'Linux',
            src: 'img/img_linux.jpeg',
            text: 'ターミナル上での操作するためのコマンドを開発に利用しています。ターミナルでEC2やレンタルサーバ内の環境にログインし操作することが多いです。',
            percentage: '20',
          },

          
          // {
          //   title: 'jQuery',
          //   color: 'lime',
          //   bgtext: 'jQuery',
          //   src: 'img/jquery.svg',
          //   text: 'jQueryによるアコーディオンの実装、ハンバーガーメニューの実装を行っています。',
          // },
          
          
          {
            title: 'JavaScript',
            color: 'yellow',
            bgtext: 'JavaScript',
            src: 'img/javascript.svg',
            text: 'ES6に基づく記法やプログラミングの概念を勉強しています。',
            percentage: '20',
          },
          
          {
            title: 'Vue',
            color: 'green',
            bgtext: 'Vue',
            src: 'img/vue-js-1.svg',
            text: 'Vue独特の構文や単一ファイルコンポーネント(.vueファイル)や各ファイルの役割を掴みつつ個人開発を進めています。現在、Vuex, VueRouterやFirebaseとの連携について学習中です。',
            percentage: '30',
          },
          {
            title: 'React',
            color: 'skyblue',
            bgtext: 'React',
            src: 'img/react.png',
            text: '動画教材で触ったことがあるのみですが、必要に応じて早急に身に付けていきます。',
            percentage: '10',
          },

          {
            title: 'HTML, CSS, Scss',
            color: 'pink',
            bgtext: 'Scss',
            src: 'img/sass-1.svg',
            text: 'HTML, CSSの基本的なレイアウトやレスポンシブ対応の実装の経験があります。SCSSでのスタイルの制御や、メンテナンス性の高いclassの制御、mixinの活用を意識しています。BEMについてより理解を深めていきたいと思います',
            percentage: '40',
          },

          {
            title: 'Gulp / npm-scripts',
            color: 'red',
            bgtext: 'Gulp',
            src: 'img/gulp.svg',
            text: 'Node.js環境でのタスクランナーを利用経験があります。ゼロから自力でGulpfileやpackage.jsonのscripts部分を記述することはできませんが、内容をある程度理解しプロジェクトに合わせて開発環境を整備することはできます。',
            percentage: '20',
          },
          
          {
            title: 'Photoshop',
            color: 'blue',
            bgtext: 'Photoshop',
            src: 'img/photoshop.png',
            text: '画像のリサイズなどに使用しています。',
            percentage: '20',
          },
        ],
      }
    },
    methods: {
      mousemove (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let skills = document.querySelectorAll('.skills .product');

        for (let i = 0; i < skills.length; i++) {
          let product = skills[i];

          let product_image = product.querySelector('.product-image-wrap');

          let img_x = mouseX - this.coords(product_image).x;
          let img_y = mouseY - this.coords(product_image).y;
          product_image.style.transform = `translateY(-${img_y/40}px) translateX(-${img_x/40}px) translateZ(100px)`;

          let bgtext = product.querySelector('.bg-text');
          let bg_x = mouseX - this.coords(bgtext).x;
          bgtext.style.transform = `translateX(${bg_x/25}px)`;
        }
      },
      coords (el) {
        let coords = el.getBoundingClientRect();

        return {
          x: coords.left / 2,
          y: coords.top / 2
        }
      }
    },
    computed: {
    ...mapGetters(['allLearningMethods', 'allHobbys', 'allThoughts']),
  },
  }
</script>

<style lang="scss" scoped>
#about {
  text-align: left;
}

.area {
  margin-bottom: 100px;

  .heading__lv3 { 
    margin-bottom: 32px;
  }
}

.column {
  display: flex;

  &__child {
    width: 50%;

    img {
      width: 50%;
      margin: 0 auto;
      display: block;
      border-radius: 50%;
    }
  }
}

// area
#learningMethod {
  .list__box {
    img {
      height: auto;
    }
  }
}

#hobbys {
  .list__box {
    .img__box {
      max-width: 100%;
    }
    img {
      height: auto;
    }

    .list {
      padding: 0;
    }
    .list__top {
      position: relative;
    }

    .list__title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 20px;
      font-size: 1.4rem;
      background-color: rgba(255, 255, 255, 0.3);
      // color: #17a2b8;
      color: #fff;
      text-shadow: 2px 2px 4px #000;
    }
  }
}

#thought {
  .list__box {
    .img__box {
      max-width: 100%;
    }
    img {
      height: auto;
    }

    .list {
      padding: 0;
    }
    .list__top {
      position: relative;
    }

    .list__title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 0 20px;
      font-size: 1.4rem;
    }
  }
}

.img__box {
  max-width: 20%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.ruby {
  font-size: 1rem;
}

main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
}

@media screen and(max-width: 767px) {
  .column {
    flex-direction: column;

    &__child {
      width: 100%;

      &:first-child {
        margin-bottom: 40px;
      }
    }
  }
  

  #hobbys {
    .list__box {
      flex-direction: row;
      .list {
        width: 47%;
      }

      .list__title {
        font-size: 1.2rem;
      }
    }
  }

  #thought {
    .list__box {
      flex-direction: row;
      .list {
        width: 47%;
      }

      .list__title {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
