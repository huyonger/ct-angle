<template>
  <div id="news">
    <div class="container">
      <div class="left">
        <!--<AboutAside :prop-index="index" @about-aside-change="asideChange"></AboutAside>-->
        <NewsAside :prop-index="index" @news-aside-change="asideChange"></NewsAside>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import NewsAside from "./aside/NewsAside";
  export default {
    name: "News",
    components:{
      NewsAside
    },
    data(){
      return{
        index:0
      }
    },
    methods: {
      asideChange(index) {
        this.index = index
        switch (index) {
          case 0:
            this.$router.push('/news/company')
            break
          case 1:
            this.$router.push('/news/profession')
            break
          case 2:
            this.$router.push('/news/media')
            break
          case 3:
            this.$router.push('/news/people')
            break
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";

  #news {
    height: 600px;
  }

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
