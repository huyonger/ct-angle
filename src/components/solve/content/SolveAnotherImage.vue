<template>
  <div id="solve-another-image">
    <h2>
      <span>其它影像</span>
      <span>ANOTHER IMAGE</span>
    </h2>
    <div class="content">
      <p>陆续更新，敬请期待</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SolveAnotherImage"
  }
</script>

<style scoped>
  #solve-another-image {
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
</style>
