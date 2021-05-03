<template>
  <div id="bottom">
    <div class="container">
      <ul>
        <li><a href="#" @click="changeNav(5)">联系我们</a></li>
        <li><a href="#">网站地图</a></li>
        <li><a href="#">版权所有</a></li>
        <li><a href="#">法律声明</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Bottom",
    methods: {
      changeNav(navIndex) {
        this.$emit("bottom-change-nav", navIndex)
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";

  #bottom {
    height: 80px;
    background-color: #13213e;
    z-index: 10;
  }

  .container {
    position: relative;
  }

  ul {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  li {
    display: inline;
  }

  a {
    padding: 0 20px;
    color: #ffffff;
    font-size: 12px;

  }


</style>
