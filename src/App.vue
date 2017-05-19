<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    let path = this.$route.path;
    let self = this;
    this.$store.dispatch('init', {path, router: self.$router})
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
