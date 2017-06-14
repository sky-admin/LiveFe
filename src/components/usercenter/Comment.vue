<template>
  <div class="comment-container">
    <h1>我的评论</h1>
    <div class="comment" v-for="item in commentList">
      <p>评论内容：{{item.message}}</p>
      <p>评论时间：{{item.date}}</p>
      <p class="link" v-on:click="toLiveRoom(item.liveId)">前往该评论所在直播间</p>
    </div>
    <div v-if="commentList.length == 0">
      <h2>暂无评论</h2>
    </div>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data() {
      return {
        commentList: []
      }
    },
    mounted() {
      this.loadComment();
    },
    methods: {
      loadComment() {
        this.$http.get(API.getClientComment(this.$store.state.user.userId)).then(
          (res) => {
            console.log(res);
            this.commentList = res.data;
          }
        )
      },
      toLiveRoom(id) {
        this.$router.push({name: 'live', params: {id: id}})
      }
    }
  }
</script>

<style lang="less">
  .comment-container {
    margin: 20px;

    .comment {
      padding: 10px;
      font-size: medium;

      .link {
        cursor: pointer;
        color: #4a8fff;
      }
    }

  }
</style>
