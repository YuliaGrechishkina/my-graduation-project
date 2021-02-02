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
<style scoped>
.сontacts {
  height: 650px;
  width: 100%;
 
  
  position: relative;
}
.сontacts__title {
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
text-transform: uppercase;
font-size: 50px;
margin-bottom: 40px;
position: absolute;
top: -5%;
left: 10%;
}
.google-map{
  width: 50%;
  height: 500px;
   margin-bottom: 50px;
   position: absolute;
   left: 5%;
   top: 12%;
 }

.contacts__info{
   width: 35%;
 position: absolute;
   right: 0;
   top: 25%;
   text-align: right;
 font-weight: bold;
  font-size: 25px;
  font-style: normal;
  text-align: left;
  display: flex;
  flex-direction: column;
 
}



.contacts__phone {
  text-decoration: none;
    margin-bottom: 50px;
  color: #ffffff;
  text-transform: uppercase;
  
}

.contacts__email{
  text-decoration: none;
    margin-bottom: 50px;
  color: #ffffff;

}

address{
    margin-bottom: 50px;
  }

.contacts__instagram{
  text-decoration: none;
   margin-bottom: 50px;
  color: #ffffff;
}
.contacts__phone:hover {
  transform: translateX(20px) scale(1.3);
   }

address:hover {
   transform: translateX(27px) scale(1.3);
}

.contacts__email:hover {
  transform: translateX(15px) scale(1.2);
   }

   .contacts__instagram:hover{
transform: translateX(27px) scale(1.3);
   }
  

.contacts__info-btn{
  background-color: #f7af89;
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
 color: #ffffff;
}
.contacts__info-btn:hover{
background-color: rgba(56, 90, 61, 0.796);
transform:  scale(1.3); 
color: #ffffff;
}

.сontacts__block-color{
  background-image: url(../assets/1.jpg);
    width:40%;
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
const myMarker = { lat: 50.4741356, lng: 30.4452074 };
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