<template>
  <div>
    <top-nav></top-nav>
    <live-panel></live-panel>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import LivePanel from './LivePanel.vue';
  import TopNav from '../common/TopNav.vue';
  import vFooter from '../common/Footer.vue';

  export default {
    components: {
      TopNav,
      vFooter,
      LivePanel
    }
  }
</script>

<style>

</style>
