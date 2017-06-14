<template>
  <div class="anchor-container">
    <p>直播间名称： {{liveData.name}}</p>
    <p>推流地址： {{liveData.rtmpStream}}</p>
    <p>直播简介： {{liveData.intro ? liveData.intro : '暂无'}}</p>
  </div>
</template>

<script>
  import API from '../../config/request'
  export default {
    data() {
      return {
        liveData: {}
      }
    },
    computed: {
      userId() {
        return this.$store.state.user.userId
      }
    },
    mounted() {
      this.getLiveData();
    },
    methods: {
      getLiveData() {
        this.$http.get(API.getLiveData(this.userId)).then(
          (res) => {
            this.liveData = res.data;
          }
        )
      }
    }
  }
</script>

<style>

</style>
