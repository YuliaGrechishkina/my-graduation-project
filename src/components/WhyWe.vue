<template>
  <div class="why_we" id="why_we">
    <div class="why_we__about why_we__about-first">
     <div class="why_we__about-wrapper">
      <h6 class="why_we__about-subtitle">
        <i class="fas fa-shield-alt"></i>
        Безпека
      </h6>

      <p class="why_we__about-text">
        100% гарантія стерилізації та дезінфекції.
      </p>
</div>
 <div class="why_we__about-wrapper">
      <h6 class="why_we__about-subtitle">
        <i class="fas fa-hand-holding-heart"></i>
        турбота
      </h6>

      <p class="why_we__about-text">
        Кава, чай, печиво і Wi-Fi для клієнтів салону безкоштовно. 
      </p>
 </div>
  <div class="why_we__about-wrapper">
      <h6 class="why_we__about-subtitle">
        <i class="fas fa-user-clock"></i>
        Економія часу без доплат
      </h6>

      <p class="why_we__about-text">
        В нас можна робити декілька процедур одночасно та зі знижкою
      </p>
  </div>
    </div>
    <div class="why_we__picture">
      <h1 class="why_we__title">
        чому саме ми?
      </h1>
      <img src="@/assets/we.jpg" alt="" class="why_we__img" />

      <button class="why_we__info-btn" id="show-modal" @click="showModal" data-booking-btn>запис он-лайн</button>
      
      
         </div>
    
    <div class="why_we__about why_we__about-sec ">
       <div class="why_we__about-wrapper">
      <h6 class="why_we__about-subtitle">
        <i class="fas fa-tags"></i>
        знижки
      </h6>

      <p class="why_we__about-text">
        В нас існує гручка система знижок для постійних клієнтів
      </p>
       </div>
        <div class="why_we__about-wrapper">
      <h6 class="why_we__about-subtitle">
        <i class="fas fa-meteor"></i>
        досвід
      </h6>

      <p class="why_we__about-text">
        Усі проведені в нашому салоні процедури виконуються майстрами з великим
        досвідом.
      </p>
        </div>
         <div class="why_we__about-wrapper">
      <h6 class="why_we__about-subtitle">
        <i class="fas fa-chalkboard-teacher"></i>
        професіоналізм
      </h6>

      <p class="why_we__about-text">
        Усі наші майстри постійно підвищують свою кваліфікацію
      </p>
         </div>
    </div>
    <div class="why_we__block-color">
</div>
    </div>
  
</template>

<style scoped lang="scss">
.why_we {
  height: 100vh;
   width: 100%;
  display: flex;
 flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 flex-direction: row;
 height: 70vh;
}
@media (min-width: 1200px) {  
  height: 100vh;
}

}

.why_we__block-color {
  background-color: #f7af89;
  width: 40%;
  height: 70%;
  z-index: -1;
  position: absolute;
  right: 0;
  top: 0;
 @media (min-width: 576px) { 

  }

@media (min-width: 768px) {  
 top: -30%;
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  
}
}
.why_we__about {
  background-image: url(../assets/1.jpg);
  height: 38%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  @media (min-width: 576px) { 

  }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 width: 30%;height: 100%;
}
@media (min-width: 1200px) {  
  width: 30%;height: 100%;
}

}

.why_we__about-wrapper{
  background-color: rgba(100, 141, 92, 0.6);
  width: 80%;
  margin-bottom: 4%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 margin-bottom: 10%;
}
@media (min-width: 1200px) {  
  
}

}

.why_we__about-wrapper:hover{
   transform:  scale(1.2);
}
.why_we__picture {
   height: 25%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    position: relative;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
  height: 30%;
  width: 60%;
}
@media (min-width: 992px) {  
  height: 30%;
  width: 40%;
}
@media (min-width: 1200px) {  
   height: 30%;
  width: 40%;
}

}

.why_we__title{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
 color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
line-height: 160%;
font-size: 3vh;
position: absolute;
 width: 55%;
  height: 20%;
  top: 2%;
left: 2%;
  z-index: 3;
  padding: 1.5vh;
  text-transform: uppercase;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
width: 65%;
  height: 10%;
  top: 0;
left: -20%;
font-size: 2.5vh; 
}
@media (min-width: 992px) {  
 font-size: 2,5vh;  width: 80%;
  height: 20%;
  top: -100%;
left: 5%;

}
@media (min-width: 1200px) {  
 font-size: 5vh;  width: 65%;
  height: 35%;
}

}

.why_we__about-subtitle {
  font-size: 2.5vh;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
  margin-top: 1%;
  text-transform: uppercase;
  
  @media (min-width: 576px) { }

@media (min-width: 768px) {  

}
@media (min-width: 992px) {  
 font-size: 1.7vh;
  margin-left: 5%;
  margin-right: 1%;
  margin-bottom: 2.5vh;
  margin-top: 5%;
}
@media (min-width: 1200px) {  
 font-size: 3.3vh;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 7vh;
  margin-top: 5%;
}

}

.why_we__about-text {
  font-size: 2vh;
  margin-left: 3%;
  margin-bottom: 1%;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 font-size: 1.7vh;
  margin-bottom: 5%;
}
@media (min-width: 1200px) {  
  font-size: 2.2vh;
  margin-left: 5%;
  margin-bottom: 5%;
}

}

 .why_we__img{
    width: 65%;
    
    @media (min-width: 576px) { 
      width: 45%;
   }

@media (min-width: 768px) { 
  position: absolute;
  top: 10%; 

  height: 20vh; 
 width: auto;
 left: 0%;
}
@media (min-width: 992px) {  
   position: absolute;
  top: -15%;
min-width:90%;
 max-width: 95%;
min-height: 130%;
 left: 2%;
}
@media (min-width: 1200px) {  
  position: absolute;
  top: -50%; 
 min-width:90%;
 max-width: 95%;
min-height: 120%;
}

  }

.why_we__info-btn{
  background-color:  #385a3dcb;
  width: 30vh;
  height: 5vh;
  margin-bottom: 1vh;
  font-size: 2vh;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  bottom: 1%;
  right: 3%;
    color: #FFF;
 box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
-webkit-box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
-moz-box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
cursor: pointer;
@media (min-width: 576px) { }

@media (min-width: 768px) {  
 width: 25vh;
  height: 5vh;
  margin-bottom: 2vh;
  font-size: 2vh;
   bottom: 35%;
  right: -20%;
}
@media (min-width: 992px) {  
 width: 25vh;
  height: 5vh;
  margin-bottom: 2vh;
  font-size: 2vh;
   bottom: -75%;
   right: 7%;
}
@media (min-width: 1200px) {  
 width: 50vh;
  height: 10vh;
  margin-bottom: 2vh;
  font-size: 4vh;
   bottom: -35%;
}

}
.why_we__info-btn:hover{
background-color:rgba(100, 141, 92, 0.9) ;
transform:  scale(1.3);
}
</style>

<script>

export default {
  name: "why-we",
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
};
</script>
