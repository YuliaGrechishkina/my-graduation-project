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

 <a href="tel:+380673538620" class="contacts__phone">
          <i class="fas fa-mobile-alt"> +38067 353 86 20</i>
        </a>

        <address>
          <i class="fas fa-map-marker-alt"></i> м. Київ, вул. Щусєва,6
        </address>

 <a href="mailto:yug.territoriya.krasoty@gmail.com" class="contacts__email">
   <i class="fas fa-at"></i> yug.territoriya.krasoty@gmail.com
   </a>

  <a href="https://www.instagram.com/yug.territoriya.krasoty/" class="contacts__instagram"> 
  <i class="fab fa-instagram"></i> yug.territoriya.krasoty </a>

   <button class="contacts__info-btn" id="show-modal" @click="showModal">
запис он-лайн
     </button>
      <ShowModal  v-show="isModalVisible"
      @close="closeModal">
     
      
      
      </ShowModal>
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
  top: 0;
left: 5%;
@media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
  width: 40%;
  height: 15%;
  font-size: 5.5vh;
  margin-bottom: 2vh;
  top: -5%;
left: 10%;
}

}
.google-map{
  width: 50%;
   margin-bottom: 5vh;
   position: absolute;
   left: 3%;
   top: 12%;
}

 

.contacts__info{
   width: 35%;
 position: absolute;
   right: 5%;
   top: 25%;
   text-align: right;
 font-weight: bold;
  font-size:1vh;
  font-style: normal;
  text-align: left;
  display: flex;
  flex-direction: column;
 
 @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
 font-size:3vh;
}

}



.contacts__phone {
  text-decoration: none;
    margin-bottom: 7vh;
  color: #ffffff;
  text-transform: uppercase;
  
}

.contacts__email{
  text-decoration: none;
    margin-bottom:7vh;
  color: #ffffff;

}

address{
   margin-bottom:7vh;
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
 
}
@media (min-width: 992px) {  
 
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
    height: 185%;
    z-index: -1;
     position: absolute;
     right: 0;
    top:-85%;
      background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

</style>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import ShowModal from "@/components/ShowModal.vue";
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAgfdOKG9WJQfsp5Udt10KEPUOyMIpvGyw',
        libraries: 'places',
    },
})
const myMarker = { lat: 50.47423600110085, lng:30.446527213481392,  };
export default {
  name: "the-contacts",
   components: {ShowModal},
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