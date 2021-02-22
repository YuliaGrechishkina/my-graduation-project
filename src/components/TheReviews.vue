<template>
   <div class="reviews">

  <h1 class="reviews__title"> Відгуки наших клієнтів</h1>
        <div class="reviews__carousel">
<carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="5">
        <slide class="reviews__slide" v-for="(review, i) in reviews" :index="i" :key="review.id">
          <div class="reviews__photo">
             <img :src="review.userImg">
          </div> 
         
          <h3 class="reviews__text" >  &#8220; {{review.text}}  &#8222;</h3>
          <p class="reviews__name"> &sim; {{review.userName}} </p>
        </slide>
      </carousel-3d>
          
      
        </div>
        </div> 
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import {reviews} from "./data";
export default {
  name: "the-reviews",
  components: {
    Carousel3d,
    Slide
    },
  data() {
    return {
      reviews
    };
  }
}

</script>

<style scoped lang="scss">
.reviews{
      height: 40vh;
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
height: 50vh;
  }
}
.reviews__title{
 
 display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 20%;
  margin-bottom: 1vh;
  margin-top: -20%;
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
  height: 20%;
 margin-top: 0%;
font-size: 3vh;
margin-left: 45%;
}

@media (min-width: 992px) {  
 width: 55%;
  height: 25%;
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
   background-image: url(../assets/3.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
     width: 100%;
     height: 56vh;
     display: flex;
     flex-direction:column;
    justify-content: center;
align-items: center;



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
  width: 30%;
   border: 2px solid white;
     
     margin-bottom: 1%;
    @media (min-width: 576px) { }

@media (min-width: 768px) {  
     
}
@media (min-width: 992px) {  


}
@media (min-width: 1200px) {  
  
 
}
}
  .reviews__text{
        font-style: italic;
          width: 100%;
    font-size:1vh;
        margin-bottom: 1%;
          color: #275c4a;
          display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
      font-weight: bold;
      max-width: 50%;
           @media (min-width: 576px) { }
@media (min-width: 768px) {  
 font-size:1.3vh;

}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
 
    
}
  }

 .reviews__name{
     font-size: 2vh;
     font-weight: bold;
     height: 20%;
     text-align: right;
     width: 50%;
     color: #275c4a;
 margin-bottom: 5%;
    display: flex;
   align-items: center;
   justify-content: center;
     @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  font-size:2vh;
  
}

      }
</style>