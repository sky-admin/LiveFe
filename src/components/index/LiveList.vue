<template>
  <div class="live-list-container">
    <Row>
      <Col v-for="item in list" :key="item.clientId" :xs="24" :sm="8" :md="6" :lg="6">
        {{item.name}}
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
      }
    }
  }
</script>

<style>

</style>
