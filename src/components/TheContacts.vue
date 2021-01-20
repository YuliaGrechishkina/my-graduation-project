<template>
  <div class="сontacts" id="сontacts">
    <h1 class="сontacts__title">Наші контакти</h1>

     <div class="map" id="map">
      <VueGoogleMap >
     <google-map>

     </google-map>

     
      </VueGoogleMap>
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
  top: 5%;
  text-transform: uppercase;
  font-size: 70px;
}

.map{
  width: 400px;
  height: 400px;
}
</style>

<script>
import VueGoogleMap from "vuejs-google-maps";

export default {
  name: "the-contacts",
  components: { VueGoogleMap },
  data: function() {
    return {
      name: "map",
     
    };
  },
   mounted() {
   
     
  },
  methods: {
    },
}
</script>
