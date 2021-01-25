import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({

    render: h => h(App)
}).$mount('#app')


import Vuex from 'vuex'

Vue.use(Vuex)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAgfdOKG9WJQfsp5Udt10KEPUOyMIpvGyw',
        libraries: 'places',
    },

})


export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
})