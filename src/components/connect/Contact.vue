<template>
  <div id="contact">
    <div class="container">
      <div class="left">
        <!--<AboutAside :prop-index="index" @about-aside-change="asideChange"></AboutAside>-->
        <ContactAside :prop-index="index" @contact-aside-change="asideChange"></ContactAside>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import ContactAside from "./aside/ContactAside";
  export default {
    name: "Connect",
    components:{
      ContactAside
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
            this.$router.push('/contact/onLion-message')
            break
          case 1:
            this.$router.push('/contact/connect-us')
            break
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";

  #contact {
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
