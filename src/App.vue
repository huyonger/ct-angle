<template>
  <div id="app">
    <Top></Top>
    <Nav @nav-change="navChange" :prop-index="navIndex"></Nav>
    <router-view/>
    <Bottom @bottom-change-nav="navChange" class="fixed"></Bottom>
  </div>
</template>

<script>
  import Top from "./components/top/Top";
  import Nav from "./components/nav/Nav";
  import Bottom from "./components/bottom/Bottom";

  export default {
    name: 'App',
    components: {
      Top,
      Nav,
      Bottom,
    },
    methods: {
      navChange(index) {
        this.navIndex = index
        switch (index) {
          case 0:
            this.$router.push('/main')
            break
          case 1:
            this.$router.push('/about')
            break
          case 2:
            this.$router.push('/news')
            break
          case 3:
            this.$router.push('/solve')
            break
          case 4:
            this.$router.push('/product')
            break
          case 5:
            this.$router.push('/contact')
            break
        }
      }
    },
    data() {
      return {
        navIndex: 0
      }
    }
  }
</script>

<style>
  .fixed{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
</style>
