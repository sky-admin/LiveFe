<template>
  <div class="footer">
    <div class="center">
      <ul class="footer-item">
        <li class="item-title">服务支持</li>
        <li class="margin-top">新手学堂</li>
        <li>平台公告</li>
        <li>文档服务</li>
        <li>提交建议</li>
        <li>举报中心</li>
      </ul>
      <ul class="footer-item">
        <li class="item-title">账号支持</li>
        <li class="margin-top">登录问题</li>
        <li>注册问题</li>
        <li>权限介绍</li>
      </ul>
      <ul class="footer-item">
        <li class="item-title">快速入口</li>
        <li class="margin-top">数据需求</li>
        <li>舆情监控</li>
        <li>数据知识</li>
        <li>标签工厂</li>
      </ul>
      <ul class="footer-item">
        <li class="item-title">友情链接</li>
        <li class="margin-top">百度糯米</li>
        <li>百度外卖</li>
        <li>百家号</li>
      </ul>
      <ul class="footer-item">
        <li class="item-title">关于我们</li>
        <li class="margin-top">平台介绍</li>
        <li>新闻</li>
        <li>法律声明</li>
        <li>联系信息</li>
        <li>开发团队</li>
      </ul>
    </div>
    <p class="copyright">2017 &copy; skyADMIN</p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    background: #1d1d20;
    padding-top: 55px;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    z-index: 1;
    overflow: hidden;

    .copyright {
      margin: 30px;
      color: #9ea7b4;
    }
  }

  .footer-item {
    width: 20%;
    float: left;
    color: rgba(255, 255, 255, 0.5);
    list-style: none;
    font-size: 12px;
    line-height: 30px;
    text-align: left;
  }

  .footer-item li:hover {
    color: #27a3c6;
    cursor: pointer;
  }

  .item-title {
    color: #fff;
  }

  .margin-top {
    margin-top: 10px;
  }

  .center {
    position: relative;
    left: 40%;
    transform: translate(-33%);
    width: 80%;
    overflow: hidden;
  }

  .active-font {
    color: #27a3c6;
  }
</style>
