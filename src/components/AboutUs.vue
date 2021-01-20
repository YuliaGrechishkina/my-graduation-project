<template>
   <div class="about" id="about">
       <div class="about__wrapper">
                <img class ="about__img-girl" src="@/assets/2.jpg" alt="">
                <img class ="about__img-leaf" src="@/assets/1.jpg" alt="">
       <div class="about__block-color">
        </div>
 <div class="about__info">
     <h2 class="about__info-subtitle">
Завітайте до нас
     </h2>
     <p class="about__info-text">
YUG запрошує вас до себе в гості, на територію здоров'я та краси. Стрижка, укладка, фарбування, манікюр, педикюр, оформлення брів, масаж, косметологічні процедури - все це чекає саме Вас.
     </p>
     <button class="about__info-btn">
запис он-лайн
     </button>
        </div>
         </div> 
        <h1 class="about__info-title"> YUG - це територія здоров'я та краси, створена саме для Вас</h1>
        </div>
</template>

<script>
export default {
  name: 'about-us',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about{
    height: 1150px;
    width: 100%;
    position: relative;
&__wrapper{
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    
}
&__img-girl{
 padding-top: 10%;
 padding-left: 10%;
    width: 700px;
    height: auto;
z-index: 1;
}
&__img-leaf{
    position: absolute;
    top: 0;
    right: 0;
    width: 700px;
    height: 200;
}

&__block-color{
    background-color: #f7af89;
    width: 600px;
    height: 950px;
    z-index: -1;
     position: absolute;
     left: 0;
     top: 50%;
}

&__info{
position: absolute;
top: 40%;
left: 45%;
z-index: 2;
background-color: #fff;
width: 500px;
height: 300px;
color: rgba(0, 0, 0, 0.796);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 10px;

}

&__info-subtitle{
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

&__info-text{
  font-size: 18px;
  margin-bottom: 30px;
  font-style: italic;
}
&__info-title{
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
padding: 30px;
left:15%;
bottom: 3%;
}

&__info-btn{
  background-color: #f7af89;
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  
}
&__info-btn:hover{
background-color: rgba(56, 90, 61, 0.796);

}
}
</style>

