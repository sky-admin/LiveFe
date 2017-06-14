<template>
  <div class="live-list-container">
    <Row>
      <Col v-for="item in list" :key="item.clientId" :xs="24" :sm="8" :md="6" :lg="6">
      <div v-on:click="toDetailLive(item.id)">
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

<style>

</style>
