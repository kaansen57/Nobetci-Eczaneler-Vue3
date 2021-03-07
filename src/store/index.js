import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedCity : "",
    selectedCityText : "",
    data : []
  },
  getters:{
    getSelectedCity(state){
      return state.selectedCity;
    },
    getSelectedCityText(state){
      return state.selectedCityText;
    },
    getData(state){
      return state.data;
    }
  },
  mutations: {
    setSelectedCity(state,payload){
      state.selectedCity = payload;
    },
    setCityText(state,payload){
      state.selectedCityText = payload;
    },
    setData(state,payload){
      state.data = [];
      state.data.push(payload);
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
