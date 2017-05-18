<template>
  <div class="user-center-container">
    <top-nav></top-nav>
    <user-main-panel></user-main-panel>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import TopNav from '../common/TopNav.vue';
  import vFooter from '../common/Footer.vue';
  import UserMainPanel from './UserMainPanel.vue';
  export default {
    components: {
      TopNav,
      vFooter,
      UserMainPanel
    }
  }
</script>

<style>

</style>
