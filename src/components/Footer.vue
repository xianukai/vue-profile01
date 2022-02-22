<template>
  <footer id="footer">
    <div>
      <small>&copy;KM</small>
    </div>
  </footer>
  
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {

    };
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #footer {
    padding: 1rem 0;
    background-color: #17a2b8;
    margin-top: 4rem;
  }

  #home ~ #footer {
    display: none;
  }
</style>