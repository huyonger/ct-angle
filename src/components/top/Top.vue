<template>
  <div id="top">
    <div class="container">
      <div class="left">
        <span class="time">{{time}}</span>
      </div>
      <div class="right">
        <span class="about">联系我们</span>
        <span class="english">English</span>
        <span class="iconfont">&#xe631;</span>
        <input type="text" placeholder="搜索">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top",
    data() {
      return {
        time: '',
        searchText:''
      }
    },
    mounted() {
      setInterval(() => {
        let time = new Date();
        this.time = time.toLocaleString()
      })
    },
  }
</script>
`
<style scoped>
  @import "../../assets/css/common.css";

  #top {
    height: 35px;
    background-color: #324e7b;
    position: relative;
  }

  .left{
    float: left;
    height: 100%;
    line-height: 28px;


  }
  .time{
    color: #ffffff;
    font-size: 12px;
  }

  .right{
    float: right;
    height: 100%;
    line-height: 28px;
  }

  .about,.english{
    color: #ffffff;
    font-size: 12px;
  }

  .about::after{
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-left: 6px solid #ffffff;
    border-bottom: 3px solid transparent;
    margin-left: 4px;
  }

  .english::after{
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-left: 6px solid #ffffff;
    border-bottom: 3px solid transparent;
    margin-left: 4px;
  }

  input{
    width: 50px;
    height: 33px;
    font-size: 16px;
    color: #999;
    position: relative;
    right: 25px;
    vertical-align: top;
    padding-left: 30px;
    padding-top: 1px;
    transition: all 0.3s ease 0s;
  }

  input:focus{
    width: 200px;
  }

  .iconfont{
    position: relative;
    top: 3px;
    left: 7px;
    z-index: 10;
    font-size: 24px;
    color: #999999;
  }





</style>
