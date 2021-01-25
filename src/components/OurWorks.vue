<template>
<div class="works" id="works">
   <div class="works__block-color">
        </div>
        <h1 class="works__title"> Наші роботи</h1>
        <div class="works__carousel">
       <VueSlickCarousel :arrows="true" 
                                :dots="true" 
                                :edgeFriction = "0.35"
                                :infinite = "false"
                                :speed = "500"
                                :slidesToShow = "1"
                                :slidesToScroll = "1">
                <div class="works__slide" v-for="slide in slides" :key="slide.imgSrc">
                  <img class="works__img" alt="icon" :src=slide.imgSrc>
                </div>
       </VueSlickCarousel>
        </div>
<div class="works__block-color-sec">
        </div>

</div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "our-works",
  components: {VueSlickCarousel},


data() {
    return {
          slides: [
        {
          imgSrc: require("@/assets/sl5.jpg"),
        },
        {
          imgSrc: require("@/assets/sl4.jpg"),
        },
        {
          imgSrc: require("@/assets/sl3.jpg"),
        },
        {
          imgSrc: require("@/assets/sl2.jpg"),
        },
        {
          imgSrc: require("@/assets/sl1.jpg"),
        },
      ],
    };
  }
}




</script>

<style scoped>
.works{
height: 800px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.works__block-color{
    background-color: #f7af89;
    width: 600px;
    height: 800px;
    z-index: -1;
     position: absolute;
     right: 0;
     top: -10%;
     } 

.works__title{
 display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
color: #ffffff;
background-color: rgba(0, 0, 0, 0.796);
line-height: 160%;
font-size: 60px;
position: absolute;
top:10%;
text-transform: uppercase;
font-size: 70px;
}
.works__carousel {
 width: 800px;
  height: 600px;
  position: absolute;
  top: 65%;
   margin: auto;
   left:44%;
transform:translate(-50%, -50%);
   }
   .works__carousel img{
height: 550px;
min-width: 1000px;
   }

.works__block-color-sec{
  background-image: url(../assets/1.jpg);
    width: 600px;
    height: 1200px;
    z-index: -1;
     position: absolute;
     left: 0;
     bottom: -95%;
      background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.slick-slider[data-v-3d1a4f76]{
  min-width: 1000px;
  display: flex;justify-content: center;
  align-items: center;
}

.slick-prev:before, .slick-next:before{
 font-family: 'slick';
    font-size: 70px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
}

</style>
