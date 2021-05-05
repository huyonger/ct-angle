<template>
  <div id="nav">
    <div class="container">
      <div class="left animate__animated animate__bounce">
        <img src="../../assets/images/logo.png" alt="">
        <span>
          中地夺<span class="duo">萃</span>
        </span>
      </div>
      <div class="right">
        <ul>
          <li><a href="#" :class="{'active':propIndex===0}" @click="changeNav(0)">首页</a></li>
          <li><a href="#" :class="{'active':propIndex===1}" @click="changeNav(1)">关于我们</a></li>
          <li><a href="#" :class="{'active':propIndex===2}" @click="changeNav(2)">新闻咨询</a></li>
          <li><a href="#" :class="{'active':propIndex===3}" @click="changeNav(3)">产品系统</a></li>
          <li><a href="#" :class="{'active':propIndex===4}" @click="changeNav(4)">解决方案</a></li>
          <li><a href="#" :class="{'active':propIndex===5}" @click="changeNav(5)">联系我们</a></li> 
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    props: {
      propIndex: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    data() {
      return {
        index: this.propIndex
      }
    },
    watch: {
      index() {
        this.$emit('nav-change',this.index)
      }
    },
    methods: {
      changeNav(index) {
        this.index = index
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";

  #nav {
    height: 95px;
    background-color: #ffffff;
  }

  .left {
    width: 200px;
    height: 100%;
    line-height: 95px;
    float: left;
  }

  img {
    width: 100px;
    height: 24px;
    position: relative;
    top: 5px;
  }

  .left span {
    font-size: 20px;
    font-weight: 700;
    color: #777;
  }

  .duo {
    color: #2f2d8e !important;
  }

  .right {
    width: 510px;
    height: 100%;
    float: right;
  }

  ul {
    width: 100%;
    height: 100%;
    line-height: 95px;
    position: relative;
    right: 25px;
  }

  li {
    float: left;
    margin-left: 2px;
  }

  .active {
    background-color: #237aeb;
    color: #ffffff;
  }

  a {
    font-size: 14px;
    padding: 10px 15px;
    border-radius: 5px;
  }

  a:hover {
    background-color: #237aeb;
    color: #ffffff;
  }

</style>
