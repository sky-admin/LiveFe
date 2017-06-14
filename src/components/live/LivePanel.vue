<template>
  <div class="live-panel">
    <div class="player-container">
      <div class="intro">
        <h1>{{name}}</h1>
        <p>{{intro}}</p>
      </div>
      <video-player :player-config="playerConfig"></video-player>
    </div>
    <hr>
    <div class="comment-container">
      <comment></comment>
    </div>
  </div>
</template>

<script>
  import Comment from './Comment.vue';
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
            this.playerConfig.file = res.data.rtmpPlay;
            this.intro = res.data.intro;
            this.name = res.data.name;
          }
        )
      }
    },
    components: {
      VideoPlayer,
      Comment
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

      .intro {
        h1 {
          font-size: 30px;
        }

        p {
          font-size: large;
          margin: 10px;
        }
      }
    }

    hr {
      margin: 20px 0 0 0;
    }

    .comment-container {
      display: inline-block;
      width: 800px;
      margin: 20px 0;
    }
  }
</style>
