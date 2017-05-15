<template>
  <div class="layout">
    <top-nav></top-nav>
    <div class="layout-content">
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
      <div>
        <Row>
        </Row>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>

<script>
  import VideoPlayer from '../common/VideoPlayer.vue';
  import TopNav from '../common/TopNav.vue';
  import vFooter from '../common/Footer.vue';

  export default {
    data() {
      return {
        playerConfig: {
          width: '100%',
          height: 600,
          file:  "rtmp://cyberplayerplay.kaywang.cn/cyberplayer/demo-L1"
        }
      }
    },
    mounted() {

    },
    components: {
      VideoPlayer,
      TopNav,
      vFooter
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    background: #f5f7f9;
    text-align: center;
    width: 100%;
  }

  .layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    display: inline-block;
    width: 80%;
    text-align: left;
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
  }

  .layout-content-main {
    padding: 10px;
  }
</style>
