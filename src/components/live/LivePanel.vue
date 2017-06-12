<template>
  <div class="live-panel">
    <div class="player-container">
      <div class="intro">
        <h1>直播人</h1>
      </div>
      <video-player></video-player>
    </div>
  </div>
</template>

<script>
  import VideoPlayer from '../common/VideoPlayer.vue';
  export default {
    data() {
      return {}
    },
    components: {
      VideoPlayer
    }
  }
</script>

<style lang="less" scoped>
  .live-panel {
    padding: 20px;
    text-align: center;

    .player-container {
      display: inline-block;
      text-align: left;
    }
  }
</style>
