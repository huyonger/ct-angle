<template>
  <div id="contact-aside">
    <h1>联系我们</h1>
    <ul>
      <li>
        <a href="#" :class="{'active':propIndex===0}" @click="index=0">
          <span>网上留言</span>
        </a>
      </li>
      <li>
        <a href="#" :class="{'active':propIndex===1}" @click="index=1">
          <span>联系我们</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ContactAside",
    props:{
      propIndex: {
        type:Number,
        default(){
          return 0
        }
      }
    },
    data(){
      return{
        index:this.propIndex
      }
    },
    watch:{
      index(){
        this.$emit('contact-aside-change',this.index)
      }
    }
  }
</script>

<style scoped>
  #contact-aside {
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
  }

  .active{
    background-color: #3085da;
    color: #ffffff;
  }
</style>
