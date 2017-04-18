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
          <Menu active-name="1-2" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                导航一
              </template>
              <Menu-item name="1-1">选项 1</Menu-item>
              <Menu-item name="1-2">选项 2</Menu-item>
              <Menu-item name="1-3">选项 3</Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                导航二
              </template>
              <Menu-item name="2-1">选项 1</Menu-item>
              <Menu-item name="2-2">选项 2</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                导航三
              </template>
              <Menu-item name="3-1">选项 1</Menu-item>
              <Menu-item name="3-2">选项 2</Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="19">
          <div class="layout-content-main">内容区域</div>
        </i-col>
      </Row>
    </div>
    <div class="layout-copy">
      2017 &copy; skyADMIN
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  .layout-logo{
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
  .layout-nav{
    width: 420px;
    margin: 0 20px;
    float: right;
  }
  .layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
