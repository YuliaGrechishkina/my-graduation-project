<template>
<div class="works" id="works">
  
   <div class="works__block-color">
        </div>

        <div class="works__block-color-sec"></div>

        <h1 class="works__title"> Наші роботи</h1>
       
<div class="gallery">
        <figure class="gallery__item gallery__item--1">
            <img src="@/assets/sl13.jpg" alt="Gallery image 1" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--2">
            <img src="@/assets/sl6.jpg" alt="Gallery image 2" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--3">
            <img src="@/assets/sl8.jpg" alt="Gallery image 3" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--4">
            <img src="@/assets/sl7.jpg" alt="Gallery image 4" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--5">
            <img src="@/assets/sl4.jpg" alt="Gallery image 5" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--6">
            <img src="@/assets/sl5.jpg" alt="Gallery image 6" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--7">
            <img src="@/assets/sl1.jpg" alt="Gallery image 7" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--8">
            <img src="@/assets/sl15.jpg" alt="Gallery image 8" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--9">
            <img src="@/assets/sl2.jpg" alt="Gallery image 9" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--10">
            <img src="@/assets/sl9.jpg" alt="Gallery image 10" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--11">
            <img src="@/assets/sl14.jpg" alt="Gallery image 11" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--12">
            <img src="@/assets/sl11.jpg" alt="Gallery image 12" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--13">
            <img src="@/assets/sl3.jpg" alt="Gallery image 13" class="gallery__img">
        </figure>
        <figure class="gallery__item gallery__item--14">
            <img src="@/assets/sl12.jpg" alt="Gallery image 14" class="gallery__img">
        </figure>
</div>
</div>
</template>

<script>
export default {
  name: "our-works",
  
}




</script>

<style scoped lang="scss">
.works{
height: 60vh;
    width: 100%;
       display: flex;
    justify-content: center;
    align-items: center;
 flex-direction: column;
 position: relative;

 @media (min-width: 576px) { }

@media (min-width: 768px) {  
 min-height: 85vh;
}
@media (min-width: 992px) {  
min-height: 90vh;
}
@media (min-width: 1200px) {  
 min-height: 130vh;
}
@media (min-width: 1400px) {
 min-height: 150vh;
  }

}

.works__block-color{
    background-color: #f7af89;
    width: 50%;
    height: 78%;
    z-index: -1;
     position: absolute;
     right: 0;
     top: -40%;
     } 

.works__title{
 display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 60%;
  height: 12%;
color: #ffffff;
background-color: rgba(9, 26, 12, 0.796);
font-size: 2.5vh;
margin-right: 40%;
margin-left: 10%;
text-transform: uppercase;
z-index: 1;
 @media (min-width: 576px) { margin-top: 15%;}

@media (min-width: 768px) {  
 height: 15%;
  font-size: 3vh;
}
@media (min-width: 992px) { 
 width: 40%;
   height: 15%;
  font-size: 4vh;
}
@media (min-width: 1200px) {  
 font-size: 5vh;
   height: 25%;
   width: 40%;
}
@media (min-width: 1400px) {
  height: 35%;
  }
}


.works__block-color-sec{
  
    width:50%;
    height: 90%;
    z-index: -1;
     position: absolute;
     left: 0;
    top: 20%;
    background-image: url(../assets/1.jpg);
      background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.gallery {
       grid-column: full-start / full-end;
    display: grid;
    grid-template-rows: repeat(1, 3vw);
    grid-template-columns: repeat(8, 1fr); 
     grid-gap: 0.5rem;
    padding:0.5rem;
    max-height: 90%;
    padding-bottom: 10%;
    &>* {
        width: 100%;
        
    }
    &__item {
        &--1 {
            grid-row: 1 / span 2;
            grid-column: 1 / span 2;
        }
        &--2 {
            grid-row: 1 / span 3;
            grid-column: 3 / span 3;
        }
        &--3 {
            grid-row: 1 / span 2;
            grid-column: 6 / 7;
        }
        &--4 {
            grid-row: 1 / span 2;
            grid-column: 7 / -1;
        }
        &--5 {
            grid-row: 3 / span 3;
            grid-column: 1 / span 2;
        }
        &--6 {
            grid-row: 4 / span 2;
            grid-column: 3 / span 2;
        }
        &--7 {
            grid-row: 4 / 5;
            grid-column: 5 / 6;
        }
        &--8 {
            grid-row: 3 / span 2;
            grid-column: 6 / span 2;
        }
        &--9 {
            grid-row: 3 / span 3;
            grid-column: 8 / -1;
        }
        &--10 {
            grid-row: 6 / span 2;
            grid-column: 1 / 2;
        }
        &--11 {
            grid-row: 6 / span 2;
            grid-column: 2 / span 2;
        }
        &--12 {
            grid-row: 6 / span 2;
            grid-column: 4 / 5;
        }
        &--13 {
            grid-row: 5 / span 3;
            grid-column: 5 / span 3;
        }
        &--14 {
            grid-row: 6 / span 2;
            grid-column: 8 / -1;
        }
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        display: block;
    }

     @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
  
}
@media (min-width: 1200px) { 
  
}
}
</style>
