<template>
  <div class="services" id="service">
    <div class="services__block-color"></div>
        <ul class="services__galery-list">
      <li
        class="services__item"
        v-for="service in services"
        :key="service.id"
        :style="{           backgroundImage: `url(${service.bgImg})`,     }"
      >
      <div class="cover">
        <p class="services__item-text">
          {{ service.title }}
        </p>
        </div>
      </li>
        </ul>

  <ul class="services__galery-list-back">
      <li
        class="services__item-back"
        v-for="service in services"
        :key="service.id"
        :style="{
          backgroundImage: `url(${service.bgImgBack})`,
                  }"
      >
        <p class="services__item-back-text">
          {{ service.service1 }}
        </p>
 <p class="services__item-back-text">
          {{ service.service2 }}
        </p>
         <p class="services__item-back-text">
          {{ service.service3 }}
        </p>
         <p class="services__item-back-text">
          {{ service.service4 }}
        </p>
         <p class="services__item-back-text">
          {{ service.service5 }}
        </p>
 <p class="services__item-back-text">
          {{ service.service6 }}
        </p>
 <p class="services__item-back-text">
          {{ service.service7 }}
        </p>
      </li>
        </ul>
        <a href="#header" class="btn_up">
<i class="fas fa-chevron-up"></i>
        </a>
  </div>
</template>

<style scoped lang="scss">
.services {
height: 72vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
   @media (min-width: 576px) { 
    
  }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {   
  height: 105vh;
  top: -30%;
}
}
.services__block-color {
  background-color: #f7af89;
  width: 35%;
  height: 70%;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
}

.services__galery-list, .services__galery-list-back{
  position: absolute;
  top: 0; 
  left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

}

.services__galery-list{
z-index: 1;
}

.services__item {
  height: 25vh;
  width: 30%;
  margin: 0.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  position: relative;
z-index: 1;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
 height: 35vh;
  
}
 
}

.cover{
background: rgba(0, 0, 0, 0.25);
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0; 
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
}
.services__item-back {
  height: 25vh;
  width: 30%;
  margin: 0.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-image: url(../assets/3.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
 height: 35vh;
}

  }



.services__item-text {
  font-size: 1.3vh;
  font-weight: bold;
  text-transform: uppercase;
  color: #275c4a;
  background-color: rgba(233, 243, 231, 0.6);
  width: 100%;
  margin-bottom: 1vh;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 font-size: 2vh;
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  font-size: 4vh;
}

}

.services__item-back-text {
  font-size: 1vh;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #275c4a;
  margin-bottom: 3px;
   background-color: rgba(233, 243, 231, 0.8);
    @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  font-size: 2vh;
}
}


.services__item-back-text-all {
  color: #275c4a;
  background-color: rgba(233, 243, 231, 0.8);
  width: 100%;
}

.services__item:hover {
  opacity: 0;
  transition: 0.5s ease;
}


.services__item--depilacia {
  background-image: url(../assets/depilacia.jpg);
}

.services__galery-list {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
}


.btn_up{
  background-color: rgba(9, 26, 12, 0.796);
  z-index: 50;
  width: 7%;
  height: 5%;
  text-decoration: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  position: absolute;
  bottom: 5%;
  right: 5%;
  position: fixed;
}
.btn_up:hover{
  transform: scale(1.2);
}
</style>

<script>
import {services} from "./data";
export default {
  name: "our-services",

  data() {
    return {
      services
    };
  },
};
</script>
