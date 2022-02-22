<template>
  <div class="TextAnime1">
    <span
      v-for="(t, index) in text"
      :key="index"
      class="item"
      :style="{animationDelay: index*50+'ms'}"
      v-text="t"
      />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Portfolioのリンクから作品を確認いただけます'
    }
  }
}
</script>

<style scoped>
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 1.4rem;
  animation: text-in 0.6s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
.TextAnime1 {
  margin-top: 2rem;
}
</style>