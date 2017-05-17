<template>
  <div class="user-center-container">
    <top-nav></top-nav>
    <div class="main-area">
      欢迎来到个人中心
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import TopNav from '../common/TopNav.vue';
  import vFooter from '../common/Footer.vue';
  export default {
    components: {
      TopNav,
      vFooter
    }
  }
</script>

<style>

</style>
