<template>
  <div id="profession-contents">
    <ul>
      <li>
        <img src="https://picsum.photos/seed/picsum/150/100" alt="">
        <div class="content">
          <div>
            <span class="title">131 家新型冠状病毒检测试剂厂汇总</span>
            <span class="time">2020-02-18</span>
          </div>
          <p>
            2020 年的春节，突如其来的新型冠状病毒肺炎疫情持续蔓延，当前形势仍然严峻。面对这场突如其来的疫情，中国 IVD 企业反应迅速，无数「不计回报、无论艰险」的 IVD...
          </p>
        </div>
      </li>
      <li>
        <img src="https://picsum.photos/seed/picsum/150/100" alt="">
        <div class="content">
          <div>
            <span class="title">131 家新型冠状病毒检测试剂厂汇总</span>
            <span class="time">2020-02-18</span>
          </div>
          <p>
            2020 年的春节，突如其来的新型冠状病毒肺炎疫情持续蔓延，当前形势仍然严峻。面对这场突如其来的疫情，中国 IVD 企业反应迅速，无数「不计回报、无论艰险」的 IVD...
          </p>
        </div>
      </li>
      <li>
        <img src="https://picsum.photos/seed/picsum/150/100" alt="">
        <div class="content">
          <div>
            <span class="title">131 家新型冠状病毒检测试剂厂汇总</span>
            <span class="time">2020-02-18</span>
          </div>
          <p>
            2020 年的春节，突如其来的新型冠状病毒肺炎疫情持续蔓延，当前形势仍然严峻。面对这场突如其来的疫情，中国 IVD 企业反应迅速，无数「不计回报、无论艰险」的 IVD...
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NewsProfessionContents"
  }
</script>

<style scoped>
  ul {
    width: 800px;
  }

  li {
    position: relative;
    box-sizing: border-box;
    height: 150px;
    border-bottom: 2px solid #f6f6f6;
    padding: 25px 0 0 25px;
    transition: all 500ms ease 0ms;
  }

  .content {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 580px;
    height: 100px;
  }

  .title {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
  }

  .time {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
  }

  p {
    position: absolute;
    top: 30px;
    font-size: 15px;
    line-height: 24px;
  }

  li:hover{
    cursor: pointer;
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, .2);
  }
</style>
