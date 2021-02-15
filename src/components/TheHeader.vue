<template>
  <div class="header" id="header">
    <div class="nav__logo">
      <a href="/" class="nav__logo-link" title="YUG">
        &#8226; <img class="nav__logo_img" src="@/assets/Y.png" alt="" /> uG
        &#8226;
      </a>
      <div class="nav__contacns">
        <a href="tel:+380673538620"
          ><i class="fas fa-mobile-alt"> +38067 353 86 20</i>
        </a>

        <address>
          <i class="fas fa-map-marker-alt"></i> м. Київ, вул. Щусєва,6
        </address>

       
      </div>
    </div>
    <div class="nav">
      <ul class="nav__links-list">
        <li class="nav__link-item">
          <a href="#service" class="nav__link">Послуги</a>
        </li>
        <li class="nav__link-item">
          <a href="#works" class="nav__link">Наші роботи</a>
        </li>
        <li class="nav__link-item">
          <a href="#сontacts" class="nav__link">Наші контакти</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-header",
};
</script>

<style scoped lang="scss">
.header{
  width: 100%;
  height: 20vh;
  
 }



.nav {
  background-color: rgba(0, 0, 0, 0.789);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;

}

.nav__logo {
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 0.3vh;
  width: 100%;
 height: 10vh;
 
@media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
 height: 17vh;
}


}


.nav__link-item {
  list-style: none;
  display: inline-flex;
  margin-right: 2vh;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
 margin-right: 15vh;
}

}

.nav__link-item:last-child{
  margin-right: 0;
}

.nav__link:last-child {
  margin-right: 0;
  width: 100%;
}
.nav__links-list {
  margin-top: 1vh;
  list-style: none;
  display: inline-flex;
  font-size: 1.5vh;
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 font-size: 2vh;
}
@media (min-width: 1200px) {  
  font-size: 3vh;
}


}

.nav__logo-link {
  text-decoration: none;
  font-size:4vh;
  color: #ffffff;
  font-weight: bold;
  margin-left: -25vh;
 // Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {  }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { 
    }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { font-size: 8vh;margin-bottom: 1vh;
  margin-top: 1vh;
  padding: 1vh;
}

}
.nav__logo-link:hover {
  transform: scale(1.1);
}
.nav__logo_img {
 height: 6vh;
  margin-right: -3vh;
  margin-left: -3vh;
  margin-top: 1vh;

  @media (min-width: 576px) { }

@media (min-width: 768px) {  
 
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
height: 14vh;
  margin-right: -7vh;
  margin-left: -5vh;
  margin-top: 1vh;
}
}

.nav__contacns {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  text-align: right;
  position: absolute;
 right: 0;
  margin-right: 5vh;
  font-weight: bold;
  font-size: 1.5vh;
  
  @media (min-width: 576px) { }

@media (min-width: 768px) {  
  margin-right: 15vh;
}
@media (min-width: 992px) {  
 
}
@media (min-width: 1200px) {  
   right: 4vh;
  padding-right: 7vh;
  margin-right: 20vh;
  font-size: 3vh
}


}

a {
  text-decoration: none;
  margin-right:1vh;
  margin-bottom: 1vh;
  color: #ffffff;
  text-transform: uppercase;
}
.nav__contacns a:hover {
  transform: translateX(2vh) scale(1.3);
  }

.nav__link:hover {
  color: rgba(30, 130, 76, 1);
  transform: scale(1.3);
}

address:hover {
  transform:translateX(2vh);
  transform: translateX(2.5vh) scale(1.3);

}
</style>
