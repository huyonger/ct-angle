<template>
  <div id="solve-speech-recognition">
    <h2>
      <span>语音采集</span>
      <span>SPEECH RECOGNITION</span>
    </h2>
    <div class="content">
      <div class="title">
        <div>识别语言</div>
        <div :class="{language:true,'active':index===0}" @click="index=0">普通话</div>
        <div :class="{language:true,'active':index===1}" @click="index=1">英语</div>
        <div :class="{language:true,'active':index===2}" @click="index=2">粤语</div>
      </div>
      <div class="speech-text">
        点击按钮开始说话，您的语音将会被转为文本，请允许浏览器获取麦克风权限
        <div class="button" @click="recognition">{{buttonText}}</div>
        <div class="remind" v-show="isClick">识别中，{{time}}秒后自动停止识别</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SolveSpeechRecognition",
    data() {
      return {
        index: 0,
        buttonText: '开始识别',
        isClick: false,
        timer: null,
        time: 60
      }
    },
    methods: {
      recognition() {
        if (!this.isClick) {
          this.isClick = true
          this.buttonText = '停止识别'
          this.timer = setInterval(() => {
            if (this.time === 0) {
              clearInterval(this.timer)
              this.time = 60
              this.isClick = false
              this.buttonText = '开始识别'
            } else {
              this.time = this.time - 1
            }
          }, 1000)
        } else {
          this.buttonText = '开始识别'
          this.isClick = false
          clearInterval(this.timer)
          this.time = 60
        }
      }
    }
  }
</script>

<style scoped>
  #solve-speech-recognition {
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

  .content .title {
    height: 70px;
    background-color: #fbfbfc;
    border: 1px solid #e5e5e5;
  }

  .content .title > div {
    float: left;

  }

  .content .title > div:nth-child(1) {
    font-size: 14px;
    color: #000000;
    padding: 0 10px;
    height: 70px;
    line-height: 70px;
  }

  .language {
    width: 50px;
    font-size: 14px;
    margin: 15px 0;
    padding: 10px 20px;
    border: 1px solid #cccccc;
    text-align: center;
  }

  .content .title > div:nth-child(3) {
    margin-left: 1px;
  }

  .content .title > div:nth-child(4) {
    margin-left: 1px;
  }

  .active {
    border-color: #00a4ff;
    background-color: #eff9ff;
  }

  .speech-text {
    height: 225px;
    border: 1px solid #cccccc;
    margin-top: -1px;
    padding-left: 20px;
    padding-top: 25px;
    position: relative;
  }

  .button {
    color: #ffffff;
    background-color: #00a4ff;
    width: 140px;
    height: 35px;
    position: absolute;
    left: 20px;
    bottom: 20px;
    line-height: 35px;
    text-align: center;
  }

  .button:hover {
    cursor: pointer;
    background-color: #0092ee;
  }

  .remind{
    position: absolute;
    width: 195px;
    height: 35px;
    color: #999999;
    left: 170px;
    bottom: 20px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
  }

</style>
