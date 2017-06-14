<template>
  <div class="live-panel">
    <div class="player-container">
      <div class="intro">
        <h1>{{name}}</h1>
        <p>{{intro}}</p>
      </div>
      <video-player :player-config="playerConfig"></video-player>
    </div>
  </div>
</template>

<script>
  import VideoPlayer from '../common/VideoPlayer.vue';
  import API from '../../config/request';
  export default {
    data() {
      return {
        playerConfig: {
          width: 800,
          height: 400,
          file: ""
        },
        name: '加载中',
        intro: '加载中'
      }
    },
    created() {
      this.getLiveData();
    },
    methods: {
      getLiveData() {
        this.$http.get(API.getLiveById(this.$route.params.id)).then(
          (res) => {
            console.log(res.data);
            this.playerConfig.file = res.data.rtmpPlay;
            this.intro = res.data.intro;
            this.name = res.data.name;
          }
        )
      }
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
