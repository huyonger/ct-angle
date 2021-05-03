<template>
  <div id="about">
    <div class="container">
      <div class="left">
        <AboutAside :prop-index="index" @about-aside-change="asideChange"></AboutAside>
      </div>
      <div class="right">
        <router-view class="animate__animated animate__fadeInLeft"/>
      </div>
    </div>
  </div>
</template>

<script>
  import AboutAside from "./aside/AboutAside";
  import AboutCompanyProfile from "./content/AboutCompanyProfile";

  export default {
    name: "About",
    components: {
      AboutAside,
      AboutCompanyProfile
    },
    data() {
      return {
        index: 0
      }
    },
    methods: {
      asideChange(index) {
        this.index = index
        switch (index) {
          case 0:
            this.$router.push('/about/company-profile')
            break
          case 1:
            this.$router.push('/about/core-technology')
            break
          case 2:
            this.$router.push('/about/corporate-philosophy')
            break
          case 3:
            this.$router.push('/about/team-introduction')
            break
          case 4:
            this.$router.push('/about/workers')
            break
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";

  #about {
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
