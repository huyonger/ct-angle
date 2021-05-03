<template>
  <div id="solve">
    <div class="container">
      <div class="left">
        <SolveAside @solve-aside-change="solveAsideChange" @solve-aside-item-change="solveAsideItemChange" :prop-index="index" :prop-item-index="itemIndex"></SolveAside>
      </div>
      <div class="right">
        <router-view class="animate__animated animate__fadeInLeft"/>
      </div>
    </div>
  </div>
</template>

<script>
  import SolveAside from "./aside/SolveAside";
  import SolveCtImage from "./content/SolveCtImage";

  export default {
    name: "Solve",
    components: {
      SolveAside,
      SolveCtImage
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
            // this.solveAsideItemChange(0)
            this.$router.push('/solve/ct-image')
            break
          case 1:
            this.$router.push('/solve/question')
            // this.solveAsideItemChange(0)
            break
          case 2:
            this.$router.push('/solve/local-hospital')
            // this.solveAsideItemChange(0)
            break
        }
      },
      solveAsideItemChange(index){
        const path=this.$route.path
        this.itemIndex=index
        if(this.index===0) {
          switch (this.itemIndex) {
            case 0:
              if(path!=='/solve/ct-image'){
                this.$router.push('/solve/ct-image')
              }
              break
            case 1:
              if(path!=='/solve/another-image'){
                this.$router.push('/solve/another-image')
              }
              break
          }
        }else if(this.index===1){
          switch (this.itemIndex){
            case 0:
              if(path!=='/solve/question'){
                this.$router.push('/solve/question')
              }
              break
            case 1:
              if(path!=='/solve/speech-recognition'){
                this.$router.push('/solve/speech-recognition')
              }
              break
            case 2:
              if(path!=='/solve/medical-history'){
                this.$router.push('/solve/medical-history')
              }
              break
          }
        }else if(this.index===2){
          switch (this.itemIndex){
            case 0:
              if(path!=='/solve/local-hospital'){
                this.$router.push('/solve/local-hospital')
              }
              break
          }
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";

  #solve {
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
