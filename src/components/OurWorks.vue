<template>
<div class="works" id="works">
  
   <div class="works__block-color">
        </div>
        <h1 class="works__title"> Наші роботи</h1>
        <div class="works__carousel">
       <VueSlickCarousel :arrows="true" 
                                :dots="false" 
                                :autoplay="true"
                                :autoplaySpeed="2000"
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

<style scoped>
.works{
height: 900px;
    width: 100%;
       display: flex;
    justify-content: center;
    align-items: center;
 flex-direction: column;
 position: relative;
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
  width: 40%;
  height: 10%;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
line-height: 160%;
font-size: 60px;
position: absolute;
top:2%;
left: 9.7%;
text-transform: uppercase;
font-size: 50px;
z-index: 5;
}
.works__carousel {
 width: 90%;height: 22em;
  position: absolute;
  top: 13%;
   margin: auto;
   left:50%;
transform:translate(-50%, 0);
overflow: fill;

   }

   .works__slide{
     width: 100%;
   }
   .works__img {
height: 20em;
width:100%;
object-fit:fill;
   }

.works__block-color-sec{
  background-image: url(../assets/1.jpg);
    width:40%;
    height: 70%;
    z-index: -1;
     position: absolute;
     left: 0;
    top: 25%;
      background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.slick-slider[data-v-3d1a4f76]{
  min-width: 90%;
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

.reviews__title{
 display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%;
  height: 15%;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
line-height: 160%;
font-size: 60px;
position: absolute;
top:50%;
right: 9.7%;
text-transform: uppercase;
font-size: 45px;
z-index: 5;
}

.reviews__carousel{
  width: 90%;
  height: 250px;
  position: absolute;
  top: 67%;
   margin: auto;
   left:50%;
transform:translate(-50%, 0);
overflow: fill;
background-color: rgba(247, 175, 137, .796);
}
.reviews__slide{
     width: 90%;
     display: flex;
     flex-direction: column;
justify-content: center;
align-items: center;
padding: 2% 5%;
   }

   .reviews__text{
     margin-top: 15px;
     font-size: 35px;
     font-style: italic;
     height: 100px;
     width: 90%;
     padding-right: 20%;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-bottom: 40px;
     text-align-last: left;
      font-weight: bold;
      }

      .reviews__name{
     font-size: 40px;
     font-weight: bold;
     height: 50px;
     text-align: right;
     width: 90%;
           }
</style>
