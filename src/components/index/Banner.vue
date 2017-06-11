<template>
  <div class="header-area">
    <Row>
      <i-col span="5">
        <Menu active-name="0" width="auto">
          <Menu-group title="分类">
            <Menu-item name="1">
              <Icon type="document-text"></Icon>
              通信工程
            </Menu-item>
            <Menu-item name="2">
              <Icon type="chatbubbles"></Icon>
              软件工程
            </Menu-item>
            <Menu-item name="3">
              <Icon type="chatbubbles"></Icon>
              计算机科学与技术
            </Menu-item>
            <Menu-item name="4">
              <Icon type="chatbubbles"></Icon>
              Python
            </Menu-item>
            <Menu-item name="5">
              <Icon type="chatbubbles"></Icon>
              Java
            </Menu-item>
            <Menu-item name="6">
              <Icon type="chatbubbles"></Icon>
              前端
            </Menu-item>
            <Menu-item name="7">
              <Icon type="chatbubbles"></Icon>
              全部
            </Menu-item>
          </Menu-group>
        </Menu>
      </i-col>
      <i-col span="19" ref="layout">
        <div class="layout-content-main">
          <video-player :player-config="playerConfig"></video-player>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import VideoPlayer from '../common/VideoPlayer.vue';
  export default {
    data() {
      return {
        playerConfig: {
          width: '100%',
          height: 400,
          file: "rtmp://cyberplayerplay.kaywang.cn/cyberplayer/demo-L1"
        }
      }
    },
    components: {
      VideoPlayer
    }
  }
</script>

<style lang="less">
  .layout-content-main {
    padding: 10px;
  }
</style>
