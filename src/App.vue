<template>
<div  id="app">
        <TheHeader/>
        <AboutUs/>
        <OurServices />
        <OurWorks />
        <OurTeam />
        <TheContacts/>
        <TheFooter/>
    </div>
         
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import AboutUs from '@/components/AboutUs.vue'
import OurServices from '@/components/OurServices.vue'
import OurWorks from '@/components/OurWorks.vue'
import OurTeam from '@/components/OurTeam.vue'
import TheContacts from '@/components/TheContacts.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
   TheHeader,
    AboutUs,
    OurServices,
    OurWorks,
    OurTeam,
    TheContacts,
    TheFooter,
  }
}

</script>


<style lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
#app {
 margin: 0;
    padding: 0;
    box-sizing: border-box;
  font-family: 'Comfortaa', cursive;
    scroll-behavior: smooth; 
    min-height: 100vh;
    font-size: 100%;
    font-size: 16px;
    color: #ffffff;
}

*{
  margin: 0;
    padding: 0;
}

</style>
