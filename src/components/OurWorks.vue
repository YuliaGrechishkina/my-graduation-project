<template>
<div class="works" id="works">
   <div class="works__block-color">
        </div>
        <h1 class="works__title"> Наші роботи</h1>
        <div class="works__carousel">
       <VueSlickCarousel :arrows="true" :dots="true">
      <div><img src="@/assets/sl4.jpg" alt="" /></div>
      <div><img src="@/assets/sl2.jpg" alt="" /></div>
      <div><img src="@/assets/sl3.jpg" alt="" /></div>
      <div><img src="@/assets/sl4.jpg" alt="" /></div>
       <div><img src="@/assets/sl1.jpg" alt="" /></div>
    </VueSlickCarousel>
        </div>
<div class="works__block-color-sec">
        </div>

</div>
</template>

<script>

export default {
  name: "our-works",
  components: {VueSlickCarousel},
};
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

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
top:5%;
text-transform: uppercase;
font-size: 70px;
}
.works__carousel {
 width: 800px;
  height: 600px;
  position: absolute;
  top: 30%;
   }
   .works__carousel img{
max-height: 500px;
width: auto;
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



</style>
