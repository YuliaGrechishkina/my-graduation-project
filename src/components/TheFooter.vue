<template>
    <div class="footer" id="footer">
           <div class="footer__logo">
      <a href="/" class="footer__logo-link" title="YUG">
        &#8226; <img class="footer__logo_img" src="@/assets/Y.png" alt="" /> UG
        &#8226;
      </a>
        </div>
    </div>
</template>

<style scoped>
.footer{
     height: 100px;
    width: 100%;
background-color: #000;
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
}
.footer__logo {
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 3px;
  width: 100%;
  height: 100%;
}
.footer__logo-link {
  text-decoration: none;
  font-size: 65px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 1px;
  margin-top: 10px;
  padding: 10px;
 }

.footer__logo_img {
  height: 80px;
  margin-right: -40px;
  margin-left: -30px;
  margin-top: 5px;
}
.footer__logo-link:hover {
  transform: scale(1.1);
}
</style>



<script>
export default {
  name: 'the-footer',
  
}
</script>