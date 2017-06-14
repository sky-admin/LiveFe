<template>
  <div class="anchor-container">
    <h1>我的直播信息</h1>
    <p>直播间名称： {{liveData.name}}</p>
    <p>推流地址： {{liveData.rtmpStream}}</p>
    <p>直播简介： {{liveData.intro ? liveData.intro : '暂无'}}</p>
    <p>推流工具下载：<a href="https://sdk.bce.baidu.com/media-sdk/live-capture-sdk-tool-r2.0.zip?responseContentDisposition=attachment">Windows推流客户端</a></p>
    <p>使用说明：解压后打开sample.exe，弹出的提示中选择取消，可看到如下界面，在指定RTMP一栏中填入上面的推流地址URL，点击开始采集，即可。</p>
    <img src="../../assets/pushtools.png" alt="" style="width: 400px">
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

<style lang="less">
  .anchor-container {
    padding: 20px 30px;

    p {
      font-size: large;
      margin: 10px;
    }
  }

</style>
