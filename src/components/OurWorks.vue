<template>
<div class="works" id="works">
  
   <div class="works__block-color">
        </div>
        <h1 class="works__title"> Наші роботи</h1>
        <div class="works__carousel">
       <VueSlickCarousel :arrows="true" 
                                :dots="false" 
                                :autoplay="true"
                                :autoplaySpeed="5000"
                                :edgeFriction = "0.35"
                                :speed = "500"
                                :slidesToShow = "3"
                                :slidesToScroll = "1"
                               :infinite="true"
                               :pauseOnDotsHover="true"
                               :pauseOnHover="true"
                             
                                >
                <div class="works__slide" v-for="slide in slides" :key="slide.imgSrc">
                  <img class="works__img" alt="icon" :src=slide.imgSrc>
                </div>
       </VueSlickCarousel>
        </div>
<div class="works__block-color-sec">
        </div>


        <h1 class="reviews__title"> Відгуки наших клієнтів</h1>
        <div class="reviews__carousel">
        <VueSlickCarousel :arrows="true" 
                                :dots="false" 
                                :autoplay="true"
                                :autoplaySpeed="5000"
                                :edgeFriction = "0.35"
                                :speed = "500"
                                :slidesToShow = "1"
                                :slidesToScroll = "1"
                               :infinite="true"
                               :pauseOnDotsHover="true"
                               :pauseOnHover="true"
                               
                                >
                <div class="reviews__slide" v-for="review in reviews" :key="review.id">
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

export default {
  name: "our-works",
  components: {VueSlickCarousel},


data() {
    return {
          slides: [
            {
          imgSrc: require("@/assets/sl7.jpg"),
        },
        {
          imgSrc: require("@/assets/sl6.jpg"),
        },
        {
          imgSrc: require("@/assets/sl4.jpg"),
        },
                  
        {
          imgSrc: require("@/assets/sl3.jpg"),
        },
         {
          imgSrc: require("@/assets/sl9.jpg"),
        },
        {
          imgSrc: require("@/assets/sl2.jpg"),
        },
        {
          imgSrc: require("@/assets/sl1.jpg"),
        },
          {
          imgSrc: require("@/assets/sl11.jpg"),
        },
        
         {
          imgSrc: require("@/assets/sl5.jpg"),
        },
         {
          imgSrc: require("@/assets/sl8.jpg"),
        },
      ],

      reviews:[
{
  id: 1, 
  userName: 'Світлана',
  text: 'Хороший сервіс, прекрасні майстри, мені все сподобалося, дуже рекомендую',
},
{
  id: 2, 
  userName: 'Юлія',
  text: 'Неймовірно красивий салон, шикарна атмосфера, все дуже стильно і мило. Відмінний сервіс, круті майстри, дуже ввічливий персонал. Цей салон став для мене відкриттям.',
},
{
  id: 3, 
  userName: 'Олена',
  text: 'У мене залишилися тільки позитивні емоції. Обслуговування було на хорошому рівні. Я всім задоволена',
},
{
  id: 4, 
  userName: 'Ольга',
  text: "Стильний інтер'єр, приємний персонал. Дуже сподобалась робота майстра Тетяни. Дуже уважно, професійно, добрий догляд! Спасибі, все супер!",
},
{
  id: 5, 
  userName: 'Антоніна',
  text: 'В салоні працює відмінна команда: увагу, настрій і задоволення від результату гарантовано!',
},
     ]
    };
  }
}




</script>

<style scoped lang="scss">
.works{
  height: 60vh;
   width: 100%;
       display: flex;
    justify-content: center;
    align-items: center;
 flex-direction: column;
 position: relative;
 @media (min-width: 768px) {  
 height: 80vh;
}
@media (min-width: 992px) {  
 height: 100vh;
}
@media (min-width: 1200px) {  
 
}
}

.works__block-color{
    background-color: #f7af89;
    width: 50%;
    height: 78%;
    z-index: -1;
     position: absolute;
     right: 0;
     top: -40%;
     } 

.works__title{
 display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 60%;
  height: 10%;
  font-size: 3vh;
  top:1%;
left: 5%;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
position: absolute;
text-transform: uppercase;
z-index: 5;
@media (min-width: 576px) { }

@media (min-width: 768px) {  

}
@media (min-width: 992px) {  
  width: 40%;
  height: 10%;
  font-size: 4vh;
  top:2%;
left: 9.7%;
}
@media (min-width: 1200px) {  
 width: 40%;
  height: 10%;
  font-size: 6vh;
  top:2%;
left: 9.7%;
}

}
.works__carousel {
   position: absolute;
    margin: auto;
  overflow: fill;
width: 80%;
 height: 20vh; 
 top: 13%;
 left:50%;
transform:translate(-50%, 0);
@media (min-width: 576px) { }

@media (min-width: 768px) {  
  width: 75%;
 height: 40vh; 
 left:47%;
}
@media (min-width: 992px) {  
 width: 90%;
 height: 40vh; 
 top: 13%;
 left:50%;
transform:translate(-50%, 0);
}
@media (min-width: 1200px) {  
 
}

   }

   .works__slide{
     width: 100%;
   }
   .works__img {
height: 20vh;
width:100%;
object-fit:fill;
@media (min-width: 576px) { }

@media (min-width: 768px) {  
  height: 25vh;
}
@media (min-width: 992px) {  
  height: 30vh;
}
@media (min-width: 1200px) {  
height: 40vh;
}

   }

.works__block-color-sec{
  background-image: url(../assets/1.jpg);
      z-index: -1;
     position: absolute;
     left: 0;
   width:40%;
    height: 70%; 
    top: 15%;
      background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (min-width: 576px) { }

@media (min-width: 768px) {  
  
}
@media (min-width: 992px) {  
 top: 25%;
}
@media (min-width: 1200px) {  
  
}

}

.slick-slider[data-v-3d1a4f76]{
  min-width: 90%;
  display: flex;justify-content: center;
  align-items: center;
}

.reviews__title{
 display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
  height: 12%;
  top:48%;
right: 5%;
font-size: 3vh;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
position: absolute;
text-transform: uppercase;
z-index: 5;
@media (min-width: 576px) { }

@media (min-width: 768px) {  
 width: 65%;
  height: 10%;
  top:48%;
right: 11%;
font-size: 3vh;
}
@media (min-width: 992px) {  
 width: 65%;
  height: 10%;
  top:45%;
right: 8%;
font-size: 3vh;
}
@media (min-width: 1200px) {  
  width: 45%;
  min-height: 10%;
  max-height: 15%;
  top:54%;
right: 9.7%;
font-size: 5vh;
}

}

.reviews__carousel{
  width: 80%;
   height: 20vh; 
  top: 62%;
  position: absolute;
   margin: auto;
   left:50%;
transform:translate(-50%, 0);
overflow: fill;
background-color: rgba(247, 175, 137, .796);
@media (min-width: 576px) { }

@media (min-width: 768px) {  
   top: 60%;
    width: 75%;
 height: 22.5vh; 
 left:47%;
}
@media (min-width: 992px) {  
 width: 90%;
 left: 50%;
 top: 57%;
}
@media (min-width: 1200px) {  
 height: 30vh; 
  top: 65%;
  width: 90%;
}

}
.reviews__slide{
     width: 90%;
     display: flex;
     flex-direction: column;
justify-content: center;
align-items: center;
padding: 3% 5%;
   }

   .reviews__text{
        font-style: italic;
          width: 90%;
    font-size: 2vh;
   height: 10vh;
    margin-bottom: 2vh;
    margin-top: 2vh;
     padding-right: 20%;
     display: flex;
     justify-content: center;
     align-items: center;
      text-align-last: left;
      font-weight: bold;
      @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
   font-size: 4.5vh;
      margin-bottom: 5vh;
     padding-right: 20%;
}

      }

      .reviews__name{
     font-size: 3vh;
     font-weight: bold;
     height: 5vh;
     text-align: right;
     width: 90%;
     @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  font-size: 5vh;
}

           }
</style>
