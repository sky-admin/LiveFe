<template>
  <div class="layout">
    <top-nav></top-nav>
    <div class="layout-content">
      <banner></banner>

    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Banner from './Banner.vue';
  import TopNav from '../common/TopNav.vue';
  import vFooter from '../common/Footer.vue';

  export default {
    data() {
      return {}
    },
    mounted() {

    },
    components: {
      Banner,
      TopNav,
      vFooter
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    background: #f5f7f9;
    text-align: center;
    width: 100%;

    .layout-content {
      display: inline-block;
      width: 80%;
      text-align: left;
      min-height: 200px;
      margin: 15px;
      overflow: hidden;
      background: #fff;
      border-radius: 4px;
      padding: 20px;
    }
  }
</style>
