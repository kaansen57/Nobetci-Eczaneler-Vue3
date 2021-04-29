<template>
  <div class="content-wrapper">
    <Header></Header>
    <h1 class="mb-5 text-center" v-if="city"> <b>{{ city }}</b> Nöbetçi Eczaneler</h1>
    <TurkeyMap></TurkeyMap>
    <Result></Result>
    <Footer></Footer>
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";
import { useStore } from "vuex";
import TurkeyMap from "./TurkeyMap";
import Header from "./Header";
import Result from "./Result";
import Footer from "./Footer";
export default {
  components: {
    TurkeyMap,
    Header,
    Result,
    Footer,
  },
  setup() {
    const store = useStore();
    const dutyPharmacy = computed(() => store.getters.getData);
    const city = computed(() => store.getters.getSelectedCityOverChange);
    return {
      city,
      dutyPharmacy,
    };
  },
};
</script>
<style>
.content-wrapper{
  
}
</style>