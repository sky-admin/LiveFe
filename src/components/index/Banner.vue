<template>
  <div class="header-area">
    <Row>
      <i-col span="5">
        <Menu :active-name="index" width="auto" v-on:on-select="handleMenuSelectChange">
          <Menu-group title="分类">
            <Menu-item name="1">
              <Icon type="chatbubbles"></Icon>
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
              物联网
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
  import * as types from '../../store/mutation-types';
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
    computed: {
      index() {
        return this.$store.state.app.indexCatalog;
      }
    },
    methods: {
      handleMenuSelectChange(name) {
        this.$store.commit(types.CHANGE_INDEX_CATALOG, name);
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
