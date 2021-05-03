<template>
  <div id="product-aside">
    <h1>解决方案</h1>
    <ul>
      <li>
        <a href="#" :class="{'active':propIndex===0}" @click="liClick(0)">
          <span>CT医患之桥</span>
          <span class="iconfont right-arrow">&#xe699;</span>
        </a>
      </li>
      <div :class="{'sub-item':true,'active-sub-item':propIndex===0&&!isClick}">
        <div><a href="#" :class="{'active-item':propItemIndex===0}" @click="itemIndex=0">逻辑结构</a></div>
        <div><a href="#" :class="{'active-item':propItemIndex===1}" @click="itemIndex=1">专利与软著</a></div>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "AboutAside",
    props: {
      propIndex: {
        type: Number,
        default() {
          return 0
        }
      },
      propItemIndex: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    data() {
      return {
        index: this.propIndex,
        itemIndex: this.propItemIndex,
        isClick: false
      }
    },
    watch: {
      index() {
        this.$emit('product-aside-change', this.index)
      },
      itemIndex() {
        this.$emit('product-aside-item-change', this.itemIndex)
      }
    },
    methods: {
      liClick(index) {
        if (this.index === index&&!this.isClick) {
          this.isClick = true
          this.itemIndex = 0
        } else {
          this.index = index
          this.itemIndex = 0
          this.isClick=false
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/common.css";

  #product-aside {
    background-color: #ffffff;
    padding-top: 30px;
  }

  h1 {
    color: #324e7b;
    padding-left: 15px;
    margin-bottom: 30px;
    border-left: 5px solid #324e7b;
  }

  ul {
    padding: 0 20px;
  }

  ul > li {
    height: 55px;
    padding: 8px 0;
    line-height: 55px;
    border-top: 1px #ececec dotted;
  }

  ul > li > a {
    display: block;
    height: 55px;
    font-size: 16px;
    font-weight: 700;
    color: #7e7e7e;
    padding-left: 10px;
    position: relative;
  }

  .right-arrow {
    position: absolute;
    right: 10%;
  }

  .active {
    background-color: #3085da;
    color: #ffffff;
  }

  .active-sub-item {
    display: block !important;
  }

  .active-item {
    background-color: #86a6df;
    color: #ffffff;
  }

  .sub-item {
    font-size: 14px;
    color: #333333;
    display: none;
  }

  .sub-item > div {
    margin: 0 21px;
    height: 33px;
    line-height: 33px;
    padding: 8px 0;
    border-top: 1px #ececec dotted;
  }

  .sub-item > div > a {
    display: block;
    padding-left: 20px;
  }

  .sub-item > div > a:hover {
    background-color: #86a6df;
    color: #ffffff;
  }

</style>
