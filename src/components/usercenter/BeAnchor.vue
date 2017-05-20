<template>
  <div class="anchor-container">
    <h1>想成为主播吗？</h1>
    <Form class="anchor-form" :model="formItem" :label-width="80">
      <Form-item label="直播间名称">
        <Input v-model="formItem.name" placeholder="请输入"></Input>
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
          agree: false
        }
      }
    },
    methods: {
      async submit() {
        if (!this.validateData()) {
          return;
        }
        let rs = await this.updateUserMessage();
        console.log(rs)
        // TODO: 提交创建直播间
        if (rs) {
          let time = new Date();
          let postData = {
            name: this.formItem.name,
            intro: this.formItem.intro,
            ownerId: this.$store.state.user.userId,
            time: time.toDateString()
          };
          // todo: 接口升级，带token校验
          this.$http.post(API.createLive, postData).then(
            (res) => {
                console.log(res);
                if (res.ok === true) {
                    // 创建成功处理
                }
            }
          )
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
