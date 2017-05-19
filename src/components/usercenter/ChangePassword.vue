<template>
  <div class="change-password-container">
    <Form :model="formItem" :label-width="80">
      <Form-item label="旧密码">
        <Input type="password" v-model="formItem.oldPassword" placeholder="旧密码"></Input>
      </Form-item>
      <Form-item label="新密码">
        <Input type="password" v-model="formItem.oldPassword" placeholder="旧密码"></Input>
      </Form-item>
      <Form-item label="确认新密码">
        <Input type="password" v-model="formItem.oldPassword" placeholder="旧密码"></Input>
      </Form-item>

      <Form-item>
        <Button type="primary">提交</Button>
        <Button type="ghost" style="margin-left: 8px">取消</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formItem: {}
      }
    }
  }
</script>

<style lang="less" scoped>
  .change-password-container {
    max-width: 500px;
    margin: 30px;
  }
</style>
