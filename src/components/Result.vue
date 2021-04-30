<template>
  <div class="result mt-5">
    <div class="col-md-12 text-center" v-if="!loading">
      <h1 v-if="cityCount"> <b>{{selectedCity}}</b> için Toplam Sonuç : {{cityCount.length}} </h1>
      <ul>
        <li v-for="(pharmacys, i) in dutyPharmacy[0]" :key="i">
          {{ pharmacys.EczaneAdi }}
          {{ pharmacys.Adresi }}
          {{ pharmacys.ilce }}
          {{ pharmacys.latitude }}
          {{ pharmacys.Telefon }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive, computed, ref, onBeforeMount, onUpdated } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const cityCount = ref(0);
    const loading = computed(() => store.getters.getLoading);
    const selectedCity = computed(()=> store.getters.getSelectedCityOnClick);
    const dutyPharmacy = computed(() => {
       return store.getters.getData
    });

    onUpdated(() => {
      cityCount.value = dutyPharmacy.value[0]
    })

    return {
      dutyPharmacy,
      cityCount,
      selectedCity,
      loading
    };
  },
};
</script>

<style>
</style>