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
    getSelectedCityOnClick(state){
      return state.selectedCityOnClick;
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

  modules: {
  }
})
