import Vue from "vue";
import Vuex from "vuex";
import { replace } from "lodash";
import Plugins from "@/store/Plugins";
import GEO_JSON from "@/data/GeoJson";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: Plugins,
  state: {
    features: GEO_JSON.features,
    keyword: null,
    value: 9999999
  },
  mutations: {
    handleFilter(state) {
      state.features = GEO_JSON.features.reduce((accumulator, item) => {
        if (state.keyword) {
          // @TODO: fix case sensitive later
          const boldedText = replace(
            item.properties.project.Address,
            state.keyword,
            `<span class="font-weight-bold">${state.keyword}</span>`
          );
          if (boldedText !== item.properties.project.Address) {
            if (
              parseInt(item.properties.project.Value.replace(".", "")) <=
              state.value
            ) {
              // Preventing mutation
              const newItem = JSON.parse(JSON.stringify(item));
              newItem.properties.project.BoldedText = boldedText;
              accumulator.push(newItem);
            }
          }
        } else {
          if (
            parseInt(item.properties.project.Value.replace(".", "")) <=
            state.value
          ) {
            accumulator.push(item);
          }
        }

        return accumulator;
      }, []);
    },
    setKeyword(state, keyword) {
      state.keyword = keyword;
    },
    setValue(state, value) {
      state.value = value;
    }
  },
  actions: {
    filter({ commit }, payload) {
      commit("handleFilter", payload);
    }
  },
  modules: {}
});
