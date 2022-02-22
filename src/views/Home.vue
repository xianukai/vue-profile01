<template>
  <div id="home">
    <div class="inner">
      <TextAnime1/>

      <TextAnime2/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TextAnime1 from '@/components/TextAnime/TextAnime1'
import TextAnime2 from '@/components/TextAnime/TextAnime2'

export default {
  name: 'Home',
  components: {
    TextAnime1,
    TextAnime2,
  },
  data() {
    return {
      anime1: true,
      anime2: true,
      autoplay: false
    }
  },
}
</script>

<style lang="scss">

#home {
  // display: block;
  height: 100%;

  background-image: url('/img/bg_top01.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  padding: 180px 0 0;
  z-index: -1;
}
</style>
