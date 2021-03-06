<template>
   <h1> {{city}} Nöbetçi Eczaneler</h1>
      <!-- <li v-for="(pharmacys, i) in dutyPharmacy[0]" :key="i"> -->
  <!-- <ul>
    <li v-for="(pharmacys, i) in dutyPharmacy" :key="i">
      {{ pharmacys.EczaneAdi }}
      {{ pharmacys.Adresi }}
      {{ pharmacys.ilce }}
      {{ pharmacys.latitude }}
      {{ pharmacys.Telefon }}
    </li>
  </ul>  -->
  <TurkeyMap></TurkeyMap>
</template>

<script>

import { ref, reactive ,computed ,watch } from "vue";
import {useStore} from 'vuex';
import TurkeyMap from './TurkeyMap';
export default {
  components:{
    TurkeyMap
  },
  setup() {
    const store = useStore();
    const info = reactive({
      Adresi: "YALI MAH.ATATÜRK CAD.NO:28/A",
      ilce: "AYANCIK",
      latitude: "41.94348201,34.58826684",
      EczaneAdi: "MERVE",
      Telefon: "3686134188",
    });
    const info2 = reactive({
      Adresi: "2YALI MAH.ATATÜRK CAD.NO:28/A",
      ilce: "2AYANCIK",
      latitude: "41.94348201,34.58826684",
      EczaneAdi: "mehmet",
      Telefon: "3686134188",
    });
    const dutyPharmacy = reactive([]);
    dutyPharmacy.push(info)
    dutyPharmacy.push(info2)
    // console.log(dutyPharmacy);
    const city =  computed(()=> store.getters.getSelectedCityText);
    return {
      city,
      dutyPharmacy,
    };
  },
};
</script>
<style>
</style>