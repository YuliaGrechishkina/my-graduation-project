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
          <a href="#" class="nav__link">Головна</a>
        </li>
        <li class="nav__link-item">
          <a href="#about" class="nav__link">Про нас</a>
        </li>
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
 min-height: 100px;
  height: 170px;
}
.nav {
  background-color: rgba(0, 0, 0, 0.789);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
}

.nav__logo {
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 3px;
  width: 100%;
  height: 135px;
}

.nav__link-item {
  list-style: none;
  display: inline-flex;
  margin-right: 50px;
}
.nav__link:last-child {
  margin-right: 0;
  width: 100%;
}
.nav__links-list {
  margin-top: 10px;
  list-style: none;
  display: inline-flex;
  font-size: 18px;
}

.nav__logo-link {
  text-decoration: none;
  font-size: 70px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 1px;
  margin-top: 10px;
  padding: 10px;
 
}

.nav__logo-link:hover {
  transform: scale(1.1);
}
.nav__logo_img {
  max-height: 100px;
  margin-right: -50px;
  margin-left: -30px;
  margin-top: 5px;
}

.nav__contacns {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  text-align: right;
  position: absolute;
  right: 40px;
  padding-right: 30px;
  font-weight: bold;
}

a {
  text-decoration: none;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #ffffff;
  text-transform: uppercase;
}
.nav__contacns a:hover {
  transform: translateX(20px) scale(1.3);
  }

.nav__link:hover {
  color: rgba(30, 130, 76, 1);
  transform: scale(1.3);
}

address:hover {
  transform:translateX(20px);
  transform: translateX(27px) scale(1.3);

}
</style>
