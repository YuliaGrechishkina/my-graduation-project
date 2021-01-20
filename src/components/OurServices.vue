<template>
    <div class="services" id="service">
        <div class="services__block-color">
        </div>   
        <div class="services__galery-list">
       <div class="services__galery ">
          <div class="services__items-container">
<div class="services__item services__item--all">
           <h3 class="services__item-title">
             наші спеціальні <br><span> Послуги</span>
           </h3>
                      </div>
                <div class="services__item-back-all">
              <p class="services__item-back-text services__item-back-text-all">на нашій території Ви можете отримати <br>весь спектр послуг для здоров'я і краси.<br> Ласкаво просимо на YUG! </p>
              
          </div>    
          </div>

         <div class="services__items-container">
         
          <div class="services__item services__item--volos">
           <p class="services__item-text">
              перукарське містецтво
            </p>
          </div>
          <div class="services__item-back">
              <p class="services__item-back-text">стрижки</p>
              <p class="services__item-back-text">укладання</p>
              <p class="services__item-back-text">фарбування</p>
              <p class="services__item-back-text">відновлення волосся</p>
              <p class="services__item-back-text">нарощування</p>
          </div></div>
          <div class="services__items-container">
         
          <div class="services__item services__item--kosmetologia">
            <p class="services__item-text">
              косметологія
            </p>
          </div>
           <div class="services__item-back">
              <p class="services__item-back-text">чистка обличчя</p>
              <p class="services__item-back-text">доглядові процедури</p>
              <p class="services__item-back-text">фотоомолодження</p>
              <p class="services__item-back-text">карбоксітерапія</p>
              <p class="services__item-back-text">ін'єкції краси</p>
          </div>
          </div>
       </div>
       <div class="services__galery">
         <div class="services__items-container">
         
          <div class="services__item services__item--manikur">
            <p class="services__item-text">
              ручки
            </p>
          </div>
          <div class="services__item-back">
              <p class="services__item-back-text">манікюр</p>
              <p class="services__item-back-text">Покриття гель-лак</p>
              <p class="services__item-back-text">Нарощування нігтів</p>
              <p class="services__item-back-text">парафінотерапія</p>
              <p class="services__item-back-text">корекція нігтів</p>
          </div>
         </div>
         <div class="services__items-container">
                   <div class="services__item services__item--pedikur">
             <p class="services__item-text">
             ніжки
            </p>
          </div>
              <div class="services__item-back">
              <p class="services__item-back-text">педікюр</p>
              <p class="services__item-back-text">Покриття гель-лак</p> 
              <p class="services__item-back-text">корекція нігтів</p>
              <p class="services__item-back-text">SPA догляд </p>
              <p class="services__item-back-text">парафінотерапія</p>
             
          </div>
          </div>
          <div class="services__items-container">
         
          <div class="services__item services__item--massag">
          <p class="services__item-text"> тіло </p>
          </div>
<div class="services__item-back">
              <p class="services__item-back-text">усі види массажу</p>
              <p class="services__item-back-text">Стоун-терапія</p> 
              <p class="services__item-back-text">Скрабування і <br>зволоження тіла</p>
              <p class="services__item-back-text">Обгортання <br>за типом шкіри </p>
              
             
</div>
          </div>
    </div> 
    <div class="services__galery"> 
                 <div class="services__items-container">             
           <div class="services__item services__item--tatuag">
           <p class="services__item-text"> татуаж </p>
          </div>
          <div class="services__item-back">
              <p class="services__item-back-text">ТАТУАЖ БРІВ</p> 
              <p class="services__item-back-text">ПУДРОВІ БРОВИ</p>
              <p class="services__item-back-text">МІКРОБЛЕЙДИНГ БРІВ </p>
              <p class="services__item-back-text">ТАТУАЖ ГУБ</p>
               <p class="services__item-back-text">ТАТУАЖ ПОВІК</p>
          </div>
                 </div>
                  <div class="services__items-container">
           <div class="services__item services__item--brovi">
           <p class="services__item-text"> вії </p>
          </div>
<div class="services__item-back">
<p class="services__item-back-text">Класичне <br>нарощування вій</p> 
              <p class="services__item-back-text">2D, 3D <br>нарощування вій</p>
              <p class="services__item-back-text">ламінування </p>
                       </div>
                  </div>
 <div class="services__items-container">
          <div class="services__item services__item--depilacia">
           <p class="services__item-text">  епіляція </p>
          </div>
           <div class="services__item-back">
              <p class="services__item-back-text">шугарінг</p> 
              <p class="services__item-back-text">воскова епіляція</p>
                        </div>
       </div>
    </div>
        </div>
            </div>
        
</template>

<style scoped lang="scss">
.services{
height: 900px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.services__block-color{
    background-color: #f7af89;
    width: 600px;
    height: 150px;
    z-index: -1;
     position: absolute;
     left: 0;
     top: 0;
    } 
.services__item {
 min-height: 300px;
 width: 500px;
 margin: 2px;
 display: flex;
 justify-content: center;
 align-items:center;
 flex-direction: column;
 text-align: center;
  cursor: pointer;
  position: absolute;
  
}

.services__item-title{
 font-size: 20px;
font-weight: normal;
text-transform: uppercase;
color: #275c4a;
}
.services__item-title span{
  font-size: 45px;
  font-weight: bold;
  color:#275c4a;
  text-shadow: 2px 1px 0px  #749979;
}

.services__item-text{
font-size: 40px;
font-weight: bold;
text-transform: uppercase;
color: #275c4a;
background-color: rgba(233, 243, 231, 0.5);
width: 100%;
margin-bottom: 10px;
}
.services__item-back{
  min-height: 300px;
 width: 500px;
 margin: 2px;
 display: flex;
 justify-content: center;
 align-items:center;
 flex-direction: column;
 text-align: center;
 background-image: url(../assets/3.jpg);
  background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
     cursor: pointer;
     
}

.services__item-back-text{
font-size: 18px;
font-weight: bold;
text-transform: uppercase;
color: #275c4a;
margin-bottom: 3px;
}

.services__item--all{
 background-image: url(../assets/3.jpg);
  background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.services__item-back-all{
min-height: 300px;
 width: 500px;
 margin: 2px;
 display: flex;
 justify-content: center;
 align-items:center;
 flex-direction: column;
 text-align: center;
 background-image: url(../assets/all.jpg);
  background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
     cursor: pointer;
}

.services__item-back-text-all{
color: #275c4a;
background-color: rgba(233, 243, 231, 0.8);
width: 100%;
}


.services__item:hover{
  opacity: 0;
  transition: 0.5s ease;
    
}

.services__items-container{
position: relative;
}


.services__item--volos{
  background-image: url(../assets/volos.jpg);
}

.services__item--kosmetologia{
  background-image: url(../assets/kosmetologia.jpg);
}

.services__item--manikur{
  background-image: url(../assets/manikur.jpg);
}

.services__item--pedikur{
  background-image: url(../assets/pedikur.jpg);
}

.services__item--massag{
  background-image: url(../assets/massag.jpg);
}

.services__item--tatuag{
  background-image: url(../assets/tatuag.jpg);
}

.services__item--brovi{
  background-image: url(../assets/brovi.jpg);
}

.services__item--depilacia{
  background-image: url(../assets/depilacia.jpg);
}

.services__galery-list{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
}

.services__galery{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

</style>

<script>

export default {
  name: 'our-services',
  
}
</script>