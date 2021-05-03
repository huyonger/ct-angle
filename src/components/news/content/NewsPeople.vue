<template>
  <div id="people">
    <h2>
      <span>人物专访</span>
      <span>CLEAN ENERGY PRODUCTION</span>
    </h2>
    <div class="content">
      <div class="people">
        <img src="http://grzy.cug.edu.cn/__local/3/4D/4C/E80337CB6E202C0DA3EF2183664_5E9258AE_5160.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsPeople"
  }
</script>

<style scoped>
  #people {
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

  .people img{
    width: 300px;
    height: 160px;
  }
</style>
