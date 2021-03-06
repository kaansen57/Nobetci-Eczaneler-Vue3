import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedCity : "",
    selectedCityText : ""
  },
  getters:{
    getSelectedCity(state){
      return state.selectedCity;
    },
    getSelectedCityText(state){
      return state.selectedCityText;
    }
  },
  mutations: {
    setSelectedCity(state,payload){
      state.selectedCity = payload;
    },
    setCityText(state,payload){
      state.selectedCityText = payload;
    }
  },
  actions: {
    cityChange(context,payload){
       context.commit('setSelectedCity',payload);
    }
  },
  modules: {
  }
})
