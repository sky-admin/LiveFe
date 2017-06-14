<template>
  <div class="comment-container">
    <div class="new-comment">
      <Input v-model="comment" type="textarea" :rows="2" placeholder="请输入..."></Input>
      <Button class="submit-btn" type="primary" v-on:click="submitComment">提交评论</Button>
    </div>
    <div class="comment-list">
      <p class="title">评论列表</p>
      <p class="comment-item" v-for="item in commentList">{{item.message}}</p>
    </div>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data() {
      return {
        comment: '',
        commentList: []
      }
    },
    mounted() {
      this.loadComment();
    },
    methods: {
      submitComment() {
        let postData = {
          message: this.comment,
          date: new Date().toGMTString(),
          clientId: this.$store.state.user.userId,
          liveId: this.$route.params.id
        };
        this.$http.post(API.submitComment, postData).then(
          (res) => {
            if (res.ok === true) {
              // 成功处理
              this.$Notice.success({title: '发表评论成功！'});
              this.comment = '';
              this.loadComment();
            }
          },
          () => {
            this.$Notice.error({title: '发表评论失败！'});
          }
        )
      },
      loadComment() {
        this.$http.get(API.getLivesComment(this.$route.params.id)).then(
          (res) => {
            this.commentList = res.data;
          }
        )
      }
    }
  }
</script>

<style lang="less" scoped>
  .comment-container {
    .submit-btn {
      margin: 10px 0;
    }

    .comment-list {
      margin: 10px 0;
      text-align: left;

      .title {
        font-size: large;
      }

      .comment-item {
        font-size: medium;
        border: 1px solid black;
        margin: 2px 0;
        padding: 3px;
      }
    }
  }
</style>
