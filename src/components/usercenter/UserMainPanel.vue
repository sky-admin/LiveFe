<template>
  <div class="main-area">
    <h1>欢迎来到个人中心</h1>

  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    computed: {
      userId() {
        return this.$store.state.user.userId
      },
      accessToken() {
        return this.$store.state.user.accessToken
      },
      userData() {
        return this.$store.state.user.userData
      }
    },
    mounted() {
      console.log(this.userId);
      if (this.userId === '') {
        this.$router.push('login')
      } else {
        let promise = this.$http.get(API.user(this.userId, this.accessToken));
        this.$store.dispatch('getUserData', promise);
      }
    }
  }
</script>

<style lang="less" scoped>
  .main-area {
    margin: 40px 15%;

  }
</style>
