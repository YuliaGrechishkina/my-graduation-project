<template>
   <div class="reviews">

  <h1 class="reviews__title"> Відгуки наших клієнтів</h1>
        <div class="reviews__carousel">
        <VueSlickCarousel :arrows="true" 
                                :dots="false" 
                                :autoplay="true"
                                :autoplaySpeed="5000"
                                :edgeFriction = "0.35"
                                :speed = "500"
                                :slidesToShow = "2"
                                :slidesToScroll = "1"
                               :infinite="true"
                               :pauseOnDotsHover="true"
                               :pauseOnHover="true"
                               
                                >
                <div class="reviews__slide" v-for="review in reviews" :key="review.id">
                  <div class="reviews__photo">
           <img  alt="photo" :src= review.userImg> </div>
               
               <h3 class="reviews__text" >  &#8220; {{review.text}}  &#8222;</h3>
                <p class="reviews__name"> &sim; {{review.userName}} </p>
                
                </div>
       </VueSlickCarousel>
        </div>
        </div> 
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import {reviews} from "./data";
export default {
  name: "the-reviews",
  components: {VueSlickCarousel},
  data() {
    return {
      reviews
    };
  }
}
</script>

<style scoped lang="scss">
.reviews{
   background-color: rgba(247, 175, 137, .3);
     height: 70vh;
   width: 100%;
       display: flex;
    justify-content: center;
    align-items: center;
 flex-direction: column;
 
 @media (min-width: 768px) {  

}
@media (min-width: 992px) {  
  
}
@media (min-width: 1200px) {  
  
}
@media (min-width: 1400px) {

  }
}
.reviews__title{
 
 display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 10%;
  margin-bottom: 1vh;
  margin-top: -30%;
margin-left: 25%;
font-size: 2vh;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);

text-transform: uppercase;
z-index: 1;
@media (min-width: 576px) { width: 45%;
  height: 10%;
 margin-top: 12%;
font-size: 3vh;}

@media (min-width: 768px) {  
 width: 45%;
  height: 10%;
 margin-top: 0%;
font-size: 3vh;
margin-left: 45%;
}

@media (min-width: 992px) {  
 width: 55%;
  height: 10%;
 margin-left: 35%;
font-size: 3vh;
}
@media (min-width: 1200px) {  
  width: 60%;
  height: 10%;
   
font-size: 5vh;
}

}

.reviews__carousel{
  width: 90%;
  height: 60vh;
  background-color: rgba(247, 175, 137, .796);
@media (min-width: 576px) { }

@media (min-width: 768px) {  
   
    width: 85%;
 
 
}
@media (min-width: 992px) {  
 width: 90%;
 
}
@media (min-width: 1200px) {  
 
 
}

}
.reviews__slide{
     width: 100%;
     height: 56vh;
     display: flex;
     flex-direction:column;
    justify-content: center;
align-items: center;
padding: 5%;
border-left: solid 5px rgba(255, 255, 255, 0.5);

@media (min-width: 576px) { }

@media (min-width: 768px) {  
    
}
@media (min-width: 992px) {  

 height: 50vh;
}
@media (min-width: 1200px) {  
 
 
}
   }
.reviews__photo{
  background-image: url(../assets/1.jpg);
      background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
   
    @media (min-width: 576px) { }

@media (min-width: 768px) {  
     margin-top: 10%;
}
@media (min-width: 992px) {  

 margin-top: 10%;
}
@media (min-width: 1200px) {  
   margin-top: 0;
 
}
}
  .reviews__text{
        font-style: italic;
          width: 100%;
    font-size:1vh;
    line-height: 2.5;
   height:30%;
   margin-bottom: 15%;
    margin-top: 5vh;
     
         display: flex;
     justify-content: center;
     align-items: center;
      text-align-last: left;
      font-weight: bold;
      max-width: 80%;
      @media (min-width: 576px) { }

@media (min-width: 768px) {  
 font-size:1.5vh;
 margin-bottom: 10vh;;
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  font-size: 2vh;
      margin-bottom: 5vh;
     padding-right: 30%;
}
  }

 .reviews__name{
     font-size: 2vh;
     font-weight: bold;
     height: 20%;
     text-align: right;
     width: 100%;
     background-image: url(../assets/1.jpg);
      background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
   align-items: center;
   justify-content: center;
     @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  font-size: 6vh;
  
}

      }
</style>