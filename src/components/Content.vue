<template>
  <div class="content-wrapper">
    <Header></Header>
    <h1 class="mb-5 text-center"><b>Bugünkü Nöbetçi Eczaneler</b></h1>
    <h2 class="mb-5 text-center">
      <b> {{ dateNow }} Nöbetçi Eczaneler</b>
    </h2>
    <TurkeyMap></TurkeyMap>
    <Result></Result>
    <MapBottom></MapBottom>
    <Footer></Footer>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import Header from "./Header";
import TurkeyMap from "./TurkeyMap";
import MapBottom from "./MapBottom";
import Result from "./Result";
import Popup from "./Popup";
import Footer from "./Footer";

export default {
  setup() {
    const store = useStore();
    const dutyPharmacy = computed(() => store.getters.getData);
    const city = computed(() => store.getters.getSelectedCityOverChange);
    const monthsTurkish = reactive([
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ]);
    const dateNow = `${new Date().getDate()} ${
      monthsTurkish[new Date().getMonth()]
    }  ${new Date().getFullYear()}`;
    return {
      city,
      dutyPharmacy,
      dateNow,
    };
  },
    components: {
    Header,
    TurkeyMap,
    MapBottom,
    Result,
    Popup,
    Footer,
  },
  
};
</script>
<style scoped>

h1 {
  font-size: 40px;
  font-weight: 700;
}
h2 {
  color: #8b92b4;
}
@media (max-width: 768px) {
  h1 {
  font-size: 30px;
  font-weight: 700;
}
}
</style>
