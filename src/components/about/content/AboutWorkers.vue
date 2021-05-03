<template>
  <div id="about-content">
    <h2>
      <span>招贤纳士</span>
      <span>JOIN US</span>
    </h2>
    <div class="content">
      <p class="title">了解更多</p>
      <p class="img">
        <img src="../../../assets/images/I_need_you.png" alt="">
        <span><span>手机</span><span>扫码，加入</span><span>我们</span></span>
      </p>
    </div>  
  </div>
</template>

<script>
  export default {
    name: "AboutWorkers"
  }
</script>

<style scoped>
  #about-content {
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

  p > img {
    width: 300px;
    height: 300px;
  }

  .img {
    position: relative;
    height: 400px
  }

  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .img > span {
    position: absolute;
    left: 48%;
    top: 80%;
    transform: translateX(-50%);
  }

  .img > span > span:nth-child(1) {
    color: #16a2d2;
  }

  .img > span > span:nth-child(2) {
    color: #ff6704;
  }

  .img > span > span:nth-child(3) {
    color: #649a04;
  }
</style>
