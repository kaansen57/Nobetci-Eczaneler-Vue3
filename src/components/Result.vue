<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <h1 v-if="cityCount > 0"> {{selectedCity}} için Toplam Sonuç {{ cityCount  }}</h1>
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
    const selectedCity = computed(()=> store.state.selectedCityOnClick);
    const dutyPharmacy = computed(() => {
      return store.getters.getData
    });

    onUpdated(() => {
      cityCount.value = dutyPharmacy.value[0].length
    })

    return {
      dutyPharmacy,
      cityCount,
      selectedCity
    };
  },
};
</script>

<style>
</style>