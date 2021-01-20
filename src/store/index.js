import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import VueGoogleMap from 'vuejs-google-maps'

Vue.use(VueGoogleMap, {
    load: {
        apiKey: 'AIzaSyAgfdOKG9WJQfsp5Udt10KEPUOyMIpvGyw',
        libraries: ['...']
    }
})

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
})