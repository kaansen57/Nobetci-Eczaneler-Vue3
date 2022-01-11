import { createStore } from 'vuex'

export default createStore({
  state: {
    //Api request variable
    selectedCity: "",
    selectedCityOnClick: "",
    selectedCityOverChange: "",
    data: [],
    popupData: [],
    popupShow: false,
    loading: false,
  },
  getters: {
    getSelectedCity(state) {
      return state.selectedCity;
    },
    getSelectedCityOverChange(state) {
      return state.selectedCityOverChange;
    },
    getSelectedCityOnClick(state) {
      return state.selectedCityOnClick;
    },
    getData(state) {
      return state.data;
    },
    getLoading(state) {
      return state.loading;
    },
    getPopupData(state) {
      return state.popupData;
    },
    getPopupShow(state) {
      return state.popupShow;
    },
  },
  mutations: {
    setSelectedCity(state, payload) {
      state.selectedCity = payload;
    },
    setCityText(state, payload) {
      state.selectedCityOverChange = payload;
    },
    setSelectedCityOnClick(state, payload) {
      state.selectedCityOnClick = payload;
    },
    setData(state, payload) {
      state.data = [];
      state.data.push(payload);
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setPopupData(state, payload) {
      state.popupData = [];
      state.popupData.push(payload);
    },
    setPopupShow(state, payload) {
      state.popupShow = payload;
    },
  },
  actions: {
    setDataAction(context, payload) {
      context.commit("setData", payload);
      context.commit("setLoading", false);
    },
  },
  modules: {},
});
