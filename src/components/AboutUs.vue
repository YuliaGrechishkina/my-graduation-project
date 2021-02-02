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
     
 <button class="about__info-btn" id="show-modal" @click="showModal">запис он-лайн</button>
      
      <ShowModal  v-show="isModalVisible"
      @close="closeModal">
     
      
      
      </ShowModal>
         </div>
        



       
        <h1 class="about__info-title"> YUG - це територія здоров'я та краси, створена саме для Вас</h1>
        
</div>
  
</template>

<script>
import ShowModal from "@/components/ShowModal.vue";
export default {
  name: 'about-us',
  components: {ShowModal},
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
    height: 540px;
    width: 100%;
    position: relative;
   

&__img-girl{
position: absolute;
 top: 5%;
 left: 10%;
    width: 40%;
    height: 65%;
z-index: 2;
background-image: url(../assets/2.jpg);
background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
&__img-leaf{
    position: absolute;
    top: 0.5%;
    right: 0;
     width: 40%;
    height: 100%;
    background-image: url(../assets/1.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 0;
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
top: 10%;
left: 40%;
z-index: 2;
background-color: #fff;
width: 30%;
height: 45%;
color: rgba(0, 0, 0, 0.796);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 10px;
z-index: 5;
}

&__info-subtitle{
  margin-top: 10px;
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

&__info-text{
  font-size: 18px;
  margin-bottom: 15px;
  font-style: italic;
}
&__info-title{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
  height: 30%;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
line-height: 160%;
font-size: 40px;
margin: auto;
  position: absolute;
  top: 60%; left: 0; bottom: 0; right: 0;
  z-index: 3;
}

&__info-title:hover{
  transform: translateX(10px) scale(1.1);
}


&__info-btn{
  background-color: #f7af89;
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow:14px 19px 20px 0px rgba(0,0,0,0.71);
-webkit-box-shadow:14px 19px 20px 0px rgba(0,0,0,0.71);
-moz-box-shadow:14px 19px 20px 0px rgba(0,0,0,0.71);
}
&__info-btn:hover{
background-color: rgba(56, 90, 61, 0.796);
transform:  scale(1.3);
}

}
</style>

