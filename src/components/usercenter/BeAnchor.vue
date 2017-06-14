<template>
  <div class="anchor-container">
    <h1>想成为主播吗？</h1>
    <Form class="anchor-form" :model="formItem" :label-width="80">
      <Form-item label="直播间名称">
        <Input v-model="formItem.name" placeholder="请输入"></Input>
      </Form-item>
      <Form-item label="分类">
        <Select v-model="formItem.catalog" style="width:200px">
          <Option v-for="item in catalogList" :value="item" :key="item">{{ item }}</Option>
        </Select>
      </Form-item>
      <Form-item label="房间简介">
        <Input v-model="formItem.intro" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="请输入..."></Input>
      </Form-item>
      <Form-item>
        <Checkbox v-model="formItem.agree">已阅读/同意相关协议</Checkbox>
      </Form-item>
      <Button type="primary" v-on:click="submit">提交</Button>
    </Form>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data() {
      return {
        formItem: {
          name: '',
          intro: '',
          agree: false,
          catalog: '全部'
        },
        catalogList: ["通信工程", "软件工程", "计算机科学与技术", "物联网", "Java", "前端", "全部"]
      }
    },
    computed: {
      accessToken() {
        return this.$store.state.user.accessToken
      }
    },
    methods: {
      async submit() {
        // 表单校验
        if (!this.validateData()) {
          return;
        }
        // 异步方法更新用户是否是主播
        let rs = await this.updateUserMessage();
        // 如果更新成功，用户身份换成了主播，继续创建
        if (rs) {
          let time = new Date();
          let postData = {
            name: this.formItem.name,
            intro: this.formItem.intro,
            clientId: this.$store.state.user.userId,
            time: time.toDateString()
          };
          this.$http.post(API.createLive(this.accessToken), postData).then(
            (res) => {
              if (res.ok === true) {
                this.$Notice.success({title: '创建直播间成功'});
                let promise = this.$http.get(API.user(this.$store.state.user.userId, this.$store.state.user.accessToken));
                this.$store.dispatch('getUserData', promise);
                this.$router.push({name: 'anchorPanel'});
              }
            }
          )
        }
        else {
          // TODO：更新用户信息失败

        }

      },
      validateData() {
        if (!this.formItem.agree) {
          this.$Notice.error({title: '请同意相关协议！'});
          return false;
        }
        if (this.formItem.name === '' || this.formItem.intro === '') {
          this.$Notice.error({title: '请填写相关信息！'});
          return false;
        }
        return true;
      },
      updateUserMessage() {
        let postData = {
          isAnchor: true
        };
        let accessToken = this.$store.state.user.accessToken;
        let userId = this.$store.state.user.userId;
        return this.$http.patch(API.user(userId, accessToken), postData).then(
          (res) => {
            return res.ok === true;
          },
          () => {
            return false;
          }
        )
      }
    }
  }
</script>

<style lang="less" scoped>
  .anchor-container {
    padding: 30px;

    .anchor-form {
      margin: 20px;
      max-width: 500px;
    }
  }
</style>
