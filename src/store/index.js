import { createStore } from 'vuex'

export default createStore({
  state: {
    //Api request variable
    selectedCity : "",
    selectedCityOnClick : "",
    selectedCityOverChange : "",
    data : []
  },
  getters:{
    getSelectedCity(state){
      return state.selectedCity;
    },
    getSelectedCityOverChange(state){
      return state.selectedCityOverChange;
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
      state.selectedCityOverChange = payload;
    },
    setSelectedCityOnClick(state,payload){
      state.selectedCityOnClick = payload;
    },
    setData(state,payload){
      state.data = [];
      state.data.push(payload);
    },
  },
  actions: {
    cityChange(context,payload){
       context.commit('setSelectedCity',payload);
    }
  },
  modules: {
  }
})
