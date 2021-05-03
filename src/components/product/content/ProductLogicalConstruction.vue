<template>
  <div id="logical-construction">
    <h2>
      <span>逻辑结构</span>
      <span>LOGICAL CONSTRUCTION</span>
    </h2>
    <div class="content">
      <p class="title">逻辑结构</p>
      <p class="img">
        <img src="../../../assets/images/logical.png" alt="">
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductLogicalConstruction"
  }
</script>

<style scoped>
  #logical-construction {
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


  .content p {
    font-size: 14px;
    text-indent: 34px;
    line-height: 26px;
  }

  .content .title {
    font-size: 16px;
    color: #324e7b;
    height: 30px;
    line-height: 30px;
    margin-bottom: 12px;
    font-weight: 700;
  }

  .img{
    text-align: center;
  }


</style>
