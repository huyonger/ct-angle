<template>
  <div id="product">
    <div class="container">
      <div class="left">
        <ProductAside @product-aside-change="solveAsideChange" @product-aside-item-change="solveAsideItemChange" :prop-index="index" :prop-item-index="itemIndex"></ProductAside>
      </div>
      <div class="right">
        <router-view class="animate__animated animate__fadeInLeft"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductAside from "./aside/ProductAside";
  export default {
    name: "Product",
    components:{
      ProductAside
    },
    data() {
      return {
        index: 0,
        itemIndex: 0
      }
    },
    methods: {
      solveAsideChange(index) {
        this.index = index
        switch (index) {
          case 0:
            this.$router.push('/product/logical-construction')
            break
        }
      },
      solveAsideItemChange(index){
        this.itemIndex=index
        if(this.index===0) {
          switch (this.itemIndex) {
            case 0:
              this.$router.push('/product/logical-construction')
              break
            case 1:
              this.$router.push('/product/patent-software')
              break
          }
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";

  /*#product {*/
  /*  height: 600px;*/
  /*}*/

  .left {
    width: 250px;
    height: 100%;
    float: left;
    padding-top: 30px;
  }

  .right {
    height: 100%;
    margin-left: 300px;
    padding-top: 30px;
  }
</style>
