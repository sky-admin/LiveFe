<template>
  <div class="anchor-container">
    <h1>想成为主播吗？</h1>
    <Form :model="formItem" :label-width="80">
      <Form-item label="直播间名称">
        <Input v-model="formItem.input" placeholder="请输入"></Input>
      </Form-item>
      <Button type="primary">提交</Button>
    </Form>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .anchor-container {
    padding: 30px;
  }
</style>
