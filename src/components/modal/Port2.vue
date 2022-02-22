<template>
  <div id="overlay" v-on:click="clickEvent">
    <div id="content">
      <p><slot></slot></p>
      <button v-on:click="clickEvent">close</button>
    </div>
  </div>
</template>

<script>
export default {
  methods :{
    clickEvent() {
      this.$emit('from-child')
    }
  }
}
</script>

<style>

</style>