<template>
  <div class="сontacts" id="сontacts">
    
    <h1 class="сontacts__title">Наші контакти</h1> 
     <div class="google-map">
       <div class="mapper">
        <div id="map_holder">
          <div>
            <GmapMap
              :center="center"
              :zoom="15" map-type-id="roadmap" style="width: 100%; height: 550px">
              <GmapMarker 
                :key="index" v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true" @click="center=m.position" />
            </GmapMap>
          </div>
          </div>
        </div>
      </div>
<div class="contacts__info">

 <a href="tel:+38 097 189 70 56" class="contacts__phone">
          <i class="fas fa-mobile-alt"> +38 097 189 70 56</i>
        </a>

        <address>
          <i class="fas fa-map-marker-alt"></i> м. Київ, вул. Щусєва,6
        </address>

 <a href="mailto:yug.territoriya.krasoty@gmail.com" class="contacts__email">
   <i class="fas fa-at"></i> yug.territoriya.krasoty@gmail.com
   </a>

  <a href="https://www.instagram.com/yug.the.best/" class="contacts__instagram" target="_blank"> 
  <i class="fab fa-instagram"></i> yug.the.best </a>

   <button class="contacts__info-btn" id="show-modal" @click="showModal"  data-booking-btn>
запис он-лайн
     </button>
          </div> 
    <div class="сontacts__block-color">
        </div>
  </div>
</template>
<style scoped lang="scss">
.сontacts {
  
 width: 100%;
position: relative;
height: 90vh; 
display: flex;
flex-direction: row;
justify-content: space-around;
@media (min-width: 768px) {  
 height: 60vh; 
 
}
@media (min-width: 992px) {  
 height: 60vh; 
}
@media (min-width: 1200px) {  
 height: 90vh; 
}
  }
.сontacts__title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
 color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
text-transform: uppercase;
position: absolute;
  width: 70%;
  height: 10%;
  font-size: 3vh;
  margin-bottom: 2vh;
  top: -10%;
left: 5%;
z-index: 1;
@media (min-width: 576px) { }
@media (min-width: 768px) {  
 width: 55%;
  height: 10%;
  font-size: 3vh;
  margin-bottom: 2vh;
  top: 0;
left: 7%;
}
@media (min-width: 992px) {  
  top: 0;
  height: 20%;
}
@media (min-width: 1200px) {  
  width: 40%;
  height: 15%;
  font-size: 5.5vh;
  margin-bottom: 2vh;
  top: 0;
left: 10%;
}
}
.google-map{
  width: 50%;
   
  
    @media (min-width: 576px) { }
@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
   margin-top: 5%;
}
@media (min-width: 1200px) {  
 margin-top: 10%;
}
}
 
.contacts__info{
   width: 35%;
  text-align: right;
 font-weight: bold;
  font-size:1vh;
  font-style: normal;
  text-align: left;
  display: flex;
  flex-direction: column;
 align-items: left;
 margin-top: 20%;
 @media (min-width: 576px) { }
@media (min-width: 768px) {  
}
@media (min-width: 992px) {  
 font-size:1.5vh;
 margin-top: 20%;
}
@media (min-width: 1200px) {  
 font-size:3vh;
 margin-top: 12%;
}
}
.contacts__phone {
  text-decoration: none;
    margin-bottom: 6vh;
  color: #ffffff;
  text-transform: uppercase;
 @media (min-width: 992px) {  
  margin-bottom: 5vh;
}
@media (min-width: 1200px) {  
  margin-bottom: 6vh;
} 
}
.contacts__email{
  text-decoration: none;
    margin-bottom:7vh;
  color: #ffffff;
@media (min-width: 992px) {  
  margin-bottom: 5vh;
}
@media (min-width: 1200px) {  
  margin-bottom: 6vh;
}
}
address{
   margin-bottom:7vh;
   @media (min-width: 992px) {  
  margin-bottom: 5vh;
}
@media (min-width: 1200px) {  
  margin-bottom: 6vh;
}
  }
.contacts__instagram{
  text-decoration: none;
  margin-bottom:7vh;
  color: #ffffff;
}
.contacts__phone:hover {
  transform: translateX(2vh) scale(1.3);
   }
address:hover {
   transform: translateX(2vh) scale(1.3);
}
.contacts__email:hover {
  transform: translateX(2vh) scale(1.2);
   }
   .contacts__instagram:hover{
transform: translateX(2vh) scale(1.3);
   }
  
.contacts__info-btn{
  background-color: #f7af89;
  width: 95%;
  height: 5vh;
  font-size: 1.7vh;
  text-transform: uppercase;
  font-weight: bold;
 color: #ffffff;
   box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
-webkit-box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
-moz-box-shadow:1.4vh 1.9vh 2vh 0px rgba(0,0,0,0.71);
cursor: pointer;
@media (min-width: 576px) { }
@media (min-width: 768px) {  
 width: 70%;
  height: 5vh;
  font-size: 1.5vh;
}
@media (min-width: 992px) {  
 width: 90%;
  height: 6vh;
  font-size: 2vh;
}
@media (min-width: 1200px) {  
 width: 90%;
  height: 8vh;
  font-size: 3vh;
}
}
.contacts__info-btn:hover{
background-color: rgba(56, 90, 61, 0.796);
transform:  scale(1.3); 
color: #ffffff;
}
.сontacts__block-color{
  background-image: url(../assets/1.jpg);
    width:45%;
    height: 100%;
    z-index: -1;
     position: absolute;
     right: 0;
    top:0;
      background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (min-width: 992px){
      height: 100%
    }
    @media (min-width: 1400px) {
height: 100%;
  }
}
</style>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAgfdOKG9WJQfsp5Udt10KEPUOyMIpvGyw',
        libraries: 'places',
    },
})
const myMarker = { lat: 50.47423600110085, lng:30.446527213481392,  };
export default {
  name: "the-contacts",
   components: {},
  methods: {
   showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
  },
  data() {
    return { 
        center: myMarker,
        markers: [{
          position: myMarker
        }],
        places: [],
        isModalVisible: false,
      } 
  }
}  
  
   </script>