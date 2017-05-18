<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    let path = this.$router.path;
    let self = this;
    this.$store.dispatch('init', {path, router: self.$router})
  },
  methods: {
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
