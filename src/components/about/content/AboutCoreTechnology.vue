<template>
  <div id="core-technology">
    <h2>
      <span>核心技术</span>
      <span>CORE TECHNOLOGY</span>
    </h2>
    <div class="content">
      <p class="title">以下简单介绍“CT医患之桥”产品的基本框架。</p>
      <p>首先看CT影像智能识别模型。我们基于U-net生物医学图像分割技术，运用大量事实CT影像医学诊断数据构造并训练，获得一个能够识别患者病灶的模型。其中最主要的技术为基于2006年发表在Nature期刊上的“encoder-decoder”思想建立的，自2015年来受到广泛使用的U-net生物医学图像分割技术。</p>
      <p>根据图一我们可以基本了解U-net技术的网络架构。</p>
      <img src="../../../assets/images/framework.jpg" alt="" style="width: 800px">
      <p>其中，<span style="font-weight: 700">蓝色箭头</span>代表3*3的卷积操作，并且stride是1，padding策略是valid,。这样可以很明显得到图像大小在长和宽上都会减2的结果。<span style="font-weight: 700">红色剪头</span>则代表2*2的maxpooling操作（即下采样），stride为2。同样的，此类操作的结果则是图像大小在长和宽上直接缩小一半。<span style="font-weight: 700">绿色箭头</span>代表了反卷积操作（即上采样），即卷积操作的逆操作。<span style="font-weight: 700">灰色箭头</span>则表示复制、剪切和拼接操作，说明该层的右侧图像需要通过左侧图像作为1*1卷积模板，进行特征提取。</p>
      <p>其次，专家辅助诊断系统则采用了类似Mycin系统原理的诊断型专家系统技术，通过语音采集、问卷调查、CT影像病灶识别（CT影像智能识别AI）和病历上传等方式，达到与用户交互的功能。同时，我们利用专业医生提供的医学知识逻辑框架构建知识库，并建立对应知识库的解释器，针对用户上传的信息在知识库中寻找匹配的医学逻辑与知识，最终总结出辅助医学报告。</p>
      <p>另外，我们的前端由基于angular架构的java语言构成。前端平台形式多元化，以方便用户使用，随时引导用户获取意向功能为特点。</p>
    </div>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
  export default {
    name: "AboutCoreTechnology"
  }
</script>

<style scoped>
  #core-technology {
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
