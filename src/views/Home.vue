<template>
  <div class="home">
   <Banner />
   <Categories />
   <br>
      <br>
   <br>

   <RegisterBox />
   <br>
      <br>
   <br>
   <PopularAuction />
   <br>
      <br>
   <br>
   <HowItWorks />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'

import RegisterBox from '@/components/RegisterBox.vue'
import PopularAuction from '@/components/PopularAuction.vue'
import HowItWorks from '@/components/HowItWorks.vue'





export default {
  name: 'Home',
  components: {
    Banner,
    RegisterBox,
    PopularAuction,
    HowItWorks
  }
}
</script>
