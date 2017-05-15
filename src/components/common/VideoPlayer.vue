<template>
  <div class="abc" ref="playercontainer"></div>
</template>

<script>
  export default {
    data() {
      return {
        player: null
      }
    },
    props: {
      playerConfig: {
        type: Object,
        default() {
          return {
            width: 800,
            height: 600,
            file: "rtmp://cyberplayerplay.kaywang.cn/cyberplayer/demo-L1"
          }
        }
      }
    },
    mounted() {
      let self = this;
      let playerContainer = this.$refs.playercontainer;
      cyberplayer(playerContainer).remove();
      this.player = cyberplayer(playerContainer).setup({
        width: self.playerConfig.width,
        height: self.playerConfig.height,
        file: self.playerConfig.file, // <—rtmp直播地址
        autostart: true,
        stretching: "uniform",
        volume: 100,
        controls: true,
        rtmp: {
          reconnecttime: 5, // rtmp直播的重连次数
          bufferlength: 1 // 缓冲多少秒之后开始播放 默认1秒
        },
        ak: "010f860811cd4137ab994b27e5dde7f3"
      });
    }
  }
</script>
