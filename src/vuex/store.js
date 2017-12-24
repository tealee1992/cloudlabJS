import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       isLoggedIn: false,
       labImage: "",
       labUrl: "",
       conStatus: "",
    },
    mutations: {
    	showlogin (state) {
    		state.isLoggedIn = !state.isLoggedIn
    	},
    	labimage (state, imagename) {
    		state.labImage = imagename
    	},
        setlaburl (state, url) {
            state.labUrl = url
        },
        setconStatus (state, status) {
            state.conStatus = status
        }
    },
    actions: {

    },
    getters: {

    }
});