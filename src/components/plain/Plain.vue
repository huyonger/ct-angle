<template>

</template>

<script>
  export default {
    name: "Plain",
    data(){
      return{  
        path:''
      }
    },
    created() {
      if(this.$route.params.from==='ct-image'){
        this.$router.push('/solve/ct-image')
      }
      if(this.$route.params.from==='medical-history'){
        this.$router.push('/solve/medical-history')
      }
    }
  }
</script>

<style scoped>

</style>
