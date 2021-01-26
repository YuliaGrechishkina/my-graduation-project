<template>
  <div class="сontacts" id="сontacts">
    <h1 class="сontacts__title">Наші контакти</h1>

     <div class="google-map">
      <VueGoogleMaps :center="center" :zoom="8" style="width:500px; height: 300px">

    </VueGoogleMaps>
    </div>
  </div>
</template>

<style scoped>
.сontacts {
  height: 600px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.сontacts__title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.796);
  line-height: 160%;
  font-size: 60px;
  position: absolute;
  top: 13%;
  text-transform: uppercase;
  font-size: 70px;
}

.google-map{
  width: 50%;
  height: 500px;
}

</style>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  name: "the-contacts",
  components: { VueGoogleMaps },
  data: function() {
    return { 
      center: {lat:50.474162639389995,  lng: 30.44649115494373},
      };
  },
 }
   </script>
