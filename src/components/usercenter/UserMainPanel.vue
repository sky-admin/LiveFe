<template>
  <div class="main-area">
    <h1>欢迎来到个人中心</h1>
    <div v-if="!edit" class="message-container">
      <p>用户名： {{userData.username}}</p>
      <p>邮箱： {{userData.email}}</p>
      <p>昵称： {{userData.name ? userData.name : '暂无'}}</p>
      <p>座右铭： {{userData.motto ? userData.motto : '暂无'}}</p>
      <p>性别： {{userData.sex ? userData.sex : '未填写'}}</p>
    </div>
    <div v-if="edit" class="data-edit-container">
      <p>用户名： {{userData.username}}</p>
      <p>邮箱： {{userData.email}}</p>
      <Form :model="formItem" :label-width="80" class="user-form">
        <Form-item label="昵称">
          <Input v-model="formItem.name" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="性别">
          <Radio-group v-model="formItem.sex">
            <Radio label="男">男</Radio>
            <Radio label="女">女</Radio>
          </Radio-group>
        </Form-item>
        <Form-item label="座右铭">
          <Input v-model="formItem.motto" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="请输入..."></Input>
        </Form-item>
      </Form>
    </div>
    <div class="button-area">
      <Button v-if="!edit" type="primary" v-on:click="edit = !edit">编辑</Button>
      <Button v-if="edit" type="success" v-on:click="save">保存</Button>
    </div>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data() {
      return {
        edit: false,
        formItem: {
          name: '',
          sex: '男',
          motto: ''
        }
      }
    },
    computed: {
      userId() {
        return this.$store.state.user.userId
      },
      accessToken() {
        return this.$store.state.user.accessToken
      },
      userData() {
        return this.$store.state.user.userData
      }
    },
    mounted() {
      if (this.userId === '') {
        this.$router.push('login')
      } else {
        this.loadData();
      }
    },
    methods: {
      loadData() {
        let promise = this.$http.get(API.user(this.userId, this.accessToken));
        this.$store.dispatch('getUserData', promise);
      },
      save() {
        let postData = {
          name: this.formItem.name,
          sex: this.formItem.sex,
          motto: this.formItem.motto
        };
        let self = this;
        this.$http.patch(API.user(this.userId, this.accessToken), postData).then(
          (res) => {
            if (res.ok === true) {
              this.loadData();
              this.edit = false;
            }
          }
        )
      }
    }
  }
</script>

<style lang="less" scoped>
  .main-area {
    margin: 40px 15%;

    .message-container {
      padding: 20px;
      font-size: 18px;
      line-height: 36px;
    }

    .data-edit-container {

      p {
        padding: 20px;
        font-size: 18px;
        line-height: 6px;
      }

      .user-form {
        margin-top: 20px;
      }
    }

    .button-area {
      text-align: center;

      button {
        width: 200px;
        font-size: large;
      }
    }
  }
</style>
