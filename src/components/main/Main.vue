<template>
  <div id="main">
    <el-carousel :interval="2000" arrow="always" height="800px" class="swiper" @change="imgChange">
      <!--<el-carousel-item :key="1">-->
      <!--  <img src="../../assets/images/1.jpg" alt="">-->
      <!--</el-carousel-item>-->
      <!--<el-carousel-item :key="2">-->
      <!--  <img src="../../assets/images/2.jpg" alt="">-->
      <!--</el-carousel-item>-->
      <el-carousel-item :key="3">
        <img src="../../assets/images/5.png" alt="">
      </el-carousel-item>
      <el-carousel-item :key="4">
        <img src="../../assets/images/4.jpg" alt="">
      </el-carousel-item>
      <div class="text">
        <!--<div :class="{'active':index===0}">-->
        <!--  <div :class="{'first':index===0,'animate__animated':index===0,'animate__backInDown':index===0}">指尖挥动</div>-->
        <!--  <div :class="{'second':index===0,'animate__animated':index===0,'animate__backInDown':index===0}">私人诊所为您打开</div>-->
        <!--</div>-->
        <!--<div :class="{'active':index===1}">-->
        <!--  <div :class="{'first':index===1,'animate__animated':index===1,'animate__backInDown':index===1}">指尖挥动</div>-->
        <!--  <div :class="{'second':index===1,'animate__animated':index===1,'animate__backInDown':index===1}">私人诊所为您打开</div>-->
        <!--</div>-->
        <div :class="{'active':index===0}">
          <div :class="{'first':index===0,'animate__animated':index===0,'animate__backInDown':index===0}">互联网医疗</div>
          <div :class="{'second':index===0,'animate__animated':index===0,'animate__backInDown':index===0}">方便您的生活</div>
        </div>
        <div :class="{'active':index===1}">
          <div :class="{'first':index===1,'animate__animated':index===1,'animate__backInDown':index===1}">指尖挥动</div>
          <div :class="{'second':index===1,'animate__animated':index===1,'animate__backInDown':index===1}">私人诊所为您打开</div>
        </div>
      </div>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        imgUrls: ['../../assets/images/1.jpg', '../../assets/images/2.jpg'],
        index: 0
      }
    },
    methods:{
      imgChange(index){
        this.index=index
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 600px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .active {
    display: block !important;
  }

  .text {
    position: relative;
    z-index: 10;
    height: 200px;
    top: 300px;
  }

  .text > div {
    display: none;
  }

  .first {
    display: inline-block;
    height: 70px;
    line-height: 70px;
    color: #13213e;
    font-size: 30px;

    position: absolute;
    left: 45%;
    top: 70%;
  }

  .second {
    display: inline-block;
    height: 70px;
    line-height: 70px;
    color: #13213e;
    font-size: 30px;

    position: absolute;
    left: 55%;
    top: 90%;
  }

</style>
