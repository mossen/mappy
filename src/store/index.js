import Vue from "vue";
import Vuex from "vuex";
import GEO_JSON from "@/data/GeoJson";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    geoJson: GEO_JSON
  },
  mutations: {
    handelAutoCompleteChange(state, value) {
      console.log(state, value);
    }
  },
  actions: {},
  modules: {}
});
