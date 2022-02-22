<template>
  <transition>
    <div id="portfolio">
    <h2>Portfolio</h2>
    <div class="example-modal-window">
      <p>ボタンを押すとモーダルウィンドウが開きます</p>
      <ul>
        <li>
          <p>ポートフォリオサイト</p>
          <img src="../assets/logo.png" alt="">
          <div class="todos">
            <div 
            v-for="todo in allTodos"
            :key="todo.id"
            class="todo">
              {{ todo.title }}
            </div>
          </div>
          <button @click="openModal">モーダルを開く</button>
        </li>
        <li>
          <p>ポートフォリオサイト</p>
          <img src="../assets/logo.png" alt="">
          <p>説明</p>
          <p>
            vue-cliを使ったポートフォリオサイトです。
          </p>
          <p>使用技術</p>
          <div class="tag__box">
            <div class="tag">
              <span>Gulp</span>
            </div>
          </div>
          <button @click="openModal">モーダルを開く</button>
        </li>
        <li>
          <p>ポートフォリオサイト</p>
          <img src="../assets/logo.png" alt="">
          <p>説明</p>
          <p>
            vue-cliを使ったポートフォリオサイトです。
          </p>
          <p>使用技術</p>
          <div class="tag__box">
            <div class="tag">
              <span>Vue-cli</span>
            </div>
          </div>
          <button @click="openModal">モーダルを開く</button>
        </li>
      </ul>

      <ul>
        <li
          v-for="(skillCard, i) in allSkillCards"
          :key="i"
          class=""
        >
          <h3 class="heading__lv3">
            {{ skillCard.title }}
          </h3>
          <span>
            {{ skillCard.genre }}
          </span>
          <img
            :src="skillCard.path"
            alt=""
          >
          <p>説明</p>
          <p>
            {{ skillCard.statement }}
          </p>
          <p>リンク</p>
          <a :href="skillCard.link" target="_blank" rel="noopener">
            {{ skillCard.link }}
          </a>
          <p>使用技術</p>
          <ul class="tag__box">
            <li
              class="tag"
            >
              <p>
                {{ skillCard.tags[0] }}
              </p>
              <p>
                {{ skillCard.tags[1] }}
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <!-- コンポーネント Port1-4 -->
      <MyModal @close="closeModal" v-if="modal">
        <!-- default スロットコンテンツ -->
        <p>Vue.js Modal Window!</p>
        <div>
          <!-- <input v-model="message"> -->
          ここに画像が入ります
          <img src="../assets/logo.png" alt="">
        </div>
        <!-- /default -->
        
        <!-- footer スロットコンテンツ -->
        <template slot="footer">
          <button @click="closeModal">閉じる</button>
        </template>
        <!-- /footer -->
      </MyModal>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import MyModal from '../components/modal/Port1.vue'

export default {
  name: 'Portfolio',
  computed: mapGetters(['allTodos', 'allSkillCards']),
  components: { MyModal },
  data() {
    return {
      modal: false,
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    // doSend() {
    //   if (this.message.length > 0) {
    //     alert(this.message)
    //     this.message = ''
    //     this.closeModal()
    //   } else {
    //     alert('メッセージを入力してください')
    //   }
    // }
  }
}

</script>

<style lang="scss" scoped>
body {
  color: #fff;
}

ul {
  display: flex;
  flex-wrap: wrap;

  li {
    width: calc(100% / 2);
    margin: 0 0 40px;
    padding: 0 10px;
    border: 1px solid #fff;
    color: #fff;
  }
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.tag__box {
  display: flex;
}

.tag {
  // border: 1px solid #ccc;
  // color: #17a2b8;
  // background: #fff;
  border: none;
  font-weight: bold;
  padding: 0.2rem 0.2rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  width: auto;
  display: flex;

  p {
    margin-right: 10px;
    background: #fff;
    border: 1px solid #ccc;
    color: #17a2b8;
    padding: 8px 8px;
    border-radius: 4px;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
