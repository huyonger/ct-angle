<template>
  <div id="patent-software">
    <h2>
      <span>专利与软著</span>
      <span>PATENT SOFTWARE</span>
    </h2>
    <div class="content">
      <div class="img"><img src="../../../assets/images/patent.png" alt=""></div>
      <p class="title"><a href="../../../../static/software.doc" download="../../../../static/software.doc">点击下载</a></p>
      <br><br><br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductPatentsSoftware"
  }
</script>

<style scoped>
  #patent-software {
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
    text-align: center;
  }

  .img{
    text-align: center;
  }


  .content p {
    width: 100%;
    font-size: 14px;
    text-indent: 34px;
    line-height: 26px;
  }

  .content .title {
    position: relative;
    font-size: 16px;
    color: #324e7b;
    height: 30px;
    line-height: 30px;
    margin-bottom: 12px;
    font-weight: 700;
  }

  a{
    position: absolute;
    right: 170px;
  }

</style>
