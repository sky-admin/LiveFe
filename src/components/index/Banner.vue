<template>
  <div class="header-area">
    <Row>
      <i-col span="5">
        <Menu active-name="1" width="auto">
          <Menu-group title="内容管理">
            <Menu-item name="1">
              <Icon type="document-text"></Icon>
              文章管理
            </Menu-item>
            <Menu-item name="2">
              <Icon type="chatbubbles"></Icon>
              评论管理
            </Menu-item>
          </Menu-group>
          <Menu-group title="统计分析">
            <Menu-item name="3">
              <Icon type="heart"></Icon>
              用户留存
            </Menu-item>
            <Menu-item name="4">
              <Icon type="heart-broken"></Icon>
              流失用户
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
          height: 600,
          file: "rtmp://cyberplayerplay.kaywang.cn/cyberplayer/demo-L1"
        }
      }
    },
    components: {
      VideoPlayer
    }
  }
</script>

<style>

</style>
