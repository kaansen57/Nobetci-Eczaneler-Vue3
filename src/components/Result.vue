<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <h1>Result</h1>
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
import { reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const dutyPharmacy = computed(() => store.getters.getData);

    return {
      dutyPharmacy,
    };
  },
};
</script>

<style>
</style>