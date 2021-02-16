<template>
   <div class="about" id="about">
                      <div class ="about__img-girl"  > </div>
                <div class ="about__img-leaf"  ></div>
       <div class="about__block-color">
        </div>
 <div class="about__info">
     <h2 class="about__info-subtitle">
Завітайте до нас
     </h2>
     <p class="about__info-text">
YUG запрошує вас до себе в гості, на територію здоров'я та краси. Стрижка, укладка, фарбування, манікюр, педикюр, оформлення брів, масаж, косметологічні процедури - все це чекає саме Вас.
     </p>
     
 <button class="about__info-btn" id="show-modal" @click="showModal" data-booking-btn>запис он-лайн</button>
      
      
         </div>
        



       
        <h1 class="about__info-title"> YUG - це територія здоров'я та краси, створена саме для Вас</h1>
        
</div>
  
</template>

<script>

export default {
  name: 'about-us',
  components: {},
 data() {
    return {
      isModalVisible: false,
        };
  },
  methods: {
   showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
}
</script>

<style scoped lang="scss">
   

.about{
    height: 80vh;
  width: 100%;
    position: relative;
   

&__img-girl{
position: absolute;
 top: -3%;
 left: 5%;
    width: 85%;
    height: 45%;
z-index: 2;
background-image: url(../assets/2.jpg);
background-repeat: no-repeat;
    background-position: center;
    background-size: cover;


    @media (min-width: 576px) { }

@media (min-width: 768px) {  
 top: -10;
    width: 60%; 
  height: 35%;
  left: 7%;
}
@media (min-width: 992px) {  
  width: 70%;
   height: 50%;
}
@media (min-width: 1200px) { 
  top: 5%;
    width: 40%; 
  height: 65%;
  left: 10%;
}

}
&__img-leaf{
    position: absolute;
    top: -5%;
    right: 0;
     width: 40%;
    height: 100%;
    background-image: url(../assets/1.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;

    @media (min-width: 576px) { }

@media (min-width: 768px) {  
 width: 60%;
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
 top: 4%;
    right: 0;
     width: 40%;
    height: 100%;
}

}

&__block-color{
    background-color: #f7af89;
    width: 35%;
    height: 75%;
    z-index: -1;
     position: absolute;
     left: 0;
     top: 25%;
}

&__info{
position: absolute;
top: 30%;
left: 45%;
width: 50%;
height: 50%;
z-index: 2;
background-color: #fff;
color: rgba(0, 0, 0, 0.796);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 1vh;
z-index: 5;
 box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
-webkit-box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
-moz-box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
@media (min-width: 576px) { }

@media (min-width: 768px) {  
  top: 22%;
left: 42%;
width: 50%;
height: 45%;
}
@media (min-width: 992px) {  
 top: 15%;
left: 48%;
width: 45%;
height: 50%;
}
@media (min-width: 1200px) {  
top: 10%;
left: 40%;
width: 30%;
height: 45%;
}

}

&__info-subtitle{
  margin-top: 1vh;
  font-size: 3vh;
  text-transform: uppercase;
  margin-bottom: 1vh;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
  margin-bottom: 3vh;
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
 font-size: 4vh;
}

}

&__info-text{
  font-size: 2vh;
  margin-bottom: 1vh;
  font-style: italic;
@media (min-width: 768px) {  
  margin-bottom: 3vh;
}

}
&__info-title{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  height: 20%;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
line-height: 160%;
left: 0; bottom: 0; right: 0;font-size: 2.5vh;
margin: auto;
  position: absolute;
   z-index: 3;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 top: 70%; left: -5%; bottom: 0; right: 0;font-size: 4vh;width: 75%;
  height: 30%;
}
@media (min-width: 992px) {  
 top: 68%; left: -5%; bottom: 0; right: 0;font-size: 4vh;width: 80%;
  height: 30%;
}
@media (min-width: 1200px) {  
  top: 60%; left: 0; bottom: 0; right: 0;font-size: 6vh;width: 70%;
  height: 30%;
}

}

&__info-btn{
  cursor: pointer;
  background-color: #f7af89;
  width: 20vh;
  height: 4vh;
  margin-bottom: 1vh;
  font-size: 1.5vh;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
-webkit-box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
-moz-box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
@media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  width: 40vh;
  height: 6.5vh;
  margin-bottom: 1.5vh;
  font-size: 2.7vh;
}

}

&__info-btn:hover{
background-color: rgba(56, 90, 61, 0.796);
transform:  scale(1.3);
}

}
</style>

