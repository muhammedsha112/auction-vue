<template>
   <div class="browse-slider-section mt--140">
            <div class="container">
                <div class="section-header-2 cl-white mb-4">
                    <div class="left">
                        <h6 class="title pl-0 w-100">Browse the highlights</h6>
                    </div>
                    <div class="slider-nav">
                        <a href="#0" class="bro-prev"><i class="flaticon-left-arrow"></i></a>
                        <a href="#0" class="bro-next active"><i class="flaticon-right-arrow"></i></a>
                    </div>
                </div>
                <div class="m--15" >
                    <div class="browse-slider owl-theme owl-carousel">
                        <a href="#0" class="browse-item" v-for="category in categories" :key="category.title">
                            <img :src="category.image" alt="auction">
                            <span class="info">{{category.title}}</span>
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>









</template>

<script>
export default {
    name: 'Categories',
    data(){
        return{
           categories: [
               {
                   title: 'Vehicles',
                   img: 'assets/images/auction/01.png'
               },
               {
                   title: 'Jewelry',
                   img: '@/assets/images/auction/02.png' 
               },
               {
                    title: 'Watches',
                   img: 'assets/images/auction/03.png'
               },
               {
                    title: 'Electronics',
                   img: 'assets/images/auction/04.png'
               },
               {
                    title: 'Sports',
                   img: 'assets/images/auction/05.png'
               },
               {
                    title: 'Real Estate',
                   img: 'assets/images/auction/06.png'
               }
           ]
        }
    }

}
</script>

<style>

</style>