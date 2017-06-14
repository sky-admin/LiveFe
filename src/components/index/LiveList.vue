<template>
  <div class="live-list-container">
    <h1>当前显示 {{catalogName}} 列表</h1>
    <Row>
      <Col v-for="item in list" :key="item.clientId" :xs="24" :sm="8" :md="6" :lg="6">
      <div class="live-item" v-on:click="toDetailLive(item.id)">
        <h1>{{item.name}}</h1>
        <p>{{item.intro}}</p>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import API from '../../config/request';
  export default {
    data() {
      return {
        list: []
      }
    },
    computed: {
      catalogName() {
          return this.$store.state.app.indexCatalogName;
      }
    },
    mounted() {
      this.getLiveList();
    },
    methods: {
      getLiveList() {
        this.$http.get(API.getLiveList).then(
          (res) => {
            console.log(res.data);
            this.list = res.data;
          }
        )
      },
      toDetailLive(id) {
        this.$router.push({name: 'live', params: {id: id}});
      }
    }
  }
</script>

<style lang="less" scoped>
  .live-list-container {
    margin: 20px 0;

    .live-item {
      padding: 10px;
      border: 1px solid black;

      p {
        font-size: large;
      }
    }
  }
</style>
