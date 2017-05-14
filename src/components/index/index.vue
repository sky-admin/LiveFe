<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
        <p>寰宇直播</p>
      </div>
      <div class="layout-nav">
        <Menu-item name="1">
          <Icon type="ios-navigate"></Icon>
          注册
        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-keypad"></Icon>
          登录
        </Menu-item>
        <Menu-item name="3">
          <Icon type="ios-analytics"></Icon>
          导航三
        </Menu-item>
        <Menu-item name="4">
          <Icon type="ios-paper"></Icon>
          导航四
        </Menu-item>
      </div>
    </Menu>
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
    <div class="layout-copy">
      2017 &copy; skyADMIN
    </div>
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
          file:  "rtmp://cyberplayerplay.kaywang.cn/cyberplayer/demo-L1"
        }
      }
    },
    mounted() {

    },
    components: {
      VideoPlayer
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    background: #f5f7f9;
    text-align: center;
    width: 100%;
  }

  .layout-logo {
    width: 150px;
    height: 40px;
    background: #e3e8ee;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 10px;
    left: 20px;
    line-height: 40px;
    text-align: center;

    p {
      font-size: 30px;
      color: #5cadff;
    }
  }

  .layout-nav {
    width: 420px;
    margin: 0 20px;
    float: right;
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

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
