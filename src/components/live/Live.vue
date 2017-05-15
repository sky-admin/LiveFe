<template>
  <div>
    <top-nav></top-nav>
    <div></div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import VideoPlayer from '../common/VideoPlayer.vue';
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
