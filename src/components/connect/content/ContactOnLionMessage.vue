<template>
  <div id="onLion-message">
    <h2>
      <span>网上留言</span>
      <span>ONLION MESSAGE</span>
    </h2>
    <div class="content">
      <p class="title">在线留言</p>
      <div>姓名</div>
      <input type="text">
      <div>邮箱</div>
      <input type="text">
      <div>联系电话</div>
      <input type="text">
      <div>留言内容</div>
      <input type="text" class="comment">
      <el-button type="primary" class="button">提交</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContactOnLionMessage"
  }
</script>

<style scoped>
  #onLion-message {
    padding: 20px;
    background-color: #ffffff;
  }

  h2 {
    display: inline-block;
    border-bottom: 5px solid #324e7b;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h2 span {
    height: 40px;
    line-height: 40px;
  }

  h2 span:nth-child(1) {
    font-size: 18px;
    color: #333333;
  }

  h2 span:nth-child(2) {
    font-size: 16px;
    color: #9c9c9c;
  }

  .content {
    padding: 0 15px;
  }

  .content .title{
    color: #797979;
    font-size: 12px;
  }

  input{
    width: 100%;
    height: 34px;
    border: 1px solid #ccc;
  }

  .comment{
    height: 114px;
  }

  .content div{
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    font-weight: 700;
  }

  .button{
    margin-top: 10px;
  }
</style>
