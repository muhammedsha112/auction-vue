<template>
  <div id="nav">
    <router-view/> 
    <NavBar />
    <Footer />
   
  </div>
  
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  }
}

</script>

<style lang="scss">

</style>
