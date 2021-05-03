<template>
  <div id="media">
    <h2>
      <span>媒体报道</span>
      <span>CLEAN ENERGY PRODUCTION</span>
    </h2>
    <div class="content">
      <NewsMediaContents></NewsMediaContents>
    </div>
  </div>
</template>

<script>
  import NewsMediaContents from "./NewsMediaContents";
  export default {
    name: "NewsMedia",
    components:{
      NewsMediaContents
    }
  }
</script>

<style scoped>
  #media {
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
</style>
