<template>
  <div id="mymodal">
    <button @click="openModal">Click</button>
    <Port2 v-show="showContent" @from-child="closeModal">
      slotからモーダルウィンドウへ
    </Port2>
  </div>
</template>

<script>
import Port2 from '../components/modal/Port2.vue'

export default {
  components: { 
    Port2,
  },
  data() {
    return {
      showContent: false
    }
  },
  methods:{
    openModal() {
      this.showContent = true
    },    
    closeModal() {
      this.showContent = false
    },
  }
}
</script>

<style lang="scss">
#content{
  // z-index:10;
  z-index: 1;
  width:50%;
  padding: 1em;
  background:#fff;
}

#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;

}

// #mymodal {
//   color: #fff;
// }
</style>