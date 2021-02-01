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
    <div class="why_we__block-color"></div>
  </div>
</template>

<style scoped>
.why_we {
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
}

.why_we__block-color {
  background-color: #f7af89;
  width: 40%;
  height: 70%;
  z-index: -1;
  position: absolute;
  right: 0;
  top: -30%;
}
.why_we__about {
  background-image: url(../assets/1.jpg);
  height: 100%;
  width: 30%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}

.why_we__about-wrapper{
  background-color: rgba(100, 141, 92, 0.6);
  width: 80%;
  margin-bottom: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.why_we__about-wrapper:hover{
   transform:  scale(1.2);
}
.why_we__picture {
  height: 100%;
  width: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.why_we__title{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 65%;
  height: 20%;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
line-height: 160%;
font-size: 45px;
position: absolute;
top: 10%;
left: 5%;
  z-index: 3;
  padding: 10px;
  text-transform: uppercase;
}

.why_we__title:hover{
  transform: translateX(10px) scale(1.1);
}
.why_we__about-subtitle {
  font-size: 25px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
  text-transform: uppercase;
  margin-top: 5%;
}

.why_we__about-text {
  font-size: 20px;
  margin-left: 5%;
  margin-bottom: 5%;
}

.why_we__info{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(9, 26, 12, 0.796);
width: 80%;
position: absolute;
bottom: 12%;
right: 5%;
height: 20%;
}

  .why_we__img{
    width: 95%;
  }

</style>

<script>
export default {
  name: "why-we",
};
</script>
