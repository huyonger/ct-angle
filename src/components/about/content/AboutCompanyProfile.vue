<template>
  <div id="about-content">
    <h2>
      <span>企业简介</span>
      <span>COMPANY PROFILE</span>
    </h2>
    <div class="content">
      <p class="title">湖北中地夺萃科技有限公司</p>
      <p>湖北中地夺萃科技有限公司由国家级大创项目“基于人工智能和CT影像的典型传染病快速辅助诊断技术和系统研发”团队创立，立足于中国地质大学（武汉）创新创业中心，同武汉楚精灵医疗科技有限公司和湖北省中医院紧密合作，注册资金壹佰零贰万，是以软件开发服务与互联网信息服务为主营行业的科技创新型企业。</p>
      <p>公司现阶段将大力开发CT医患之桥产品，将人工智能影像识别、专家系统运用在辅助远程医疗领域，通过web前端技术和客户端开发进行整合，推出同时面向患者与医护人员的新一代远程辅助医疗产品。该系统核心技术在王永桂特聘副教授的指导下，以谢渝主要负责的的研究生本科生团队为核心，把握着国内外相关远程医疗技术的发展趋势，在未来有着巨大的潜在市场和广阔前景。</p>
      <p>公司预计2021年下半年进行天使轮融资，并从2022年开始启动开发更多更高效的信息系统。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutCompanyProfile"
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
</style>
