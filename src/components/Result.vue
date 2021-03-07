<template>
  <h1>Result</h1>

  <!-- <ul>
   <li v-for="(pharmacys, i) in dutyPharmacy[0]" :key="i"> 
      {{ pharmacys.EczaneAdi }}
      {{ pharmacys.Adresi }}
      {{ pharmacys.ilce }}
      {{ pharmacys.latitude }}
      {{ pharmacys.Telefon }}
    </li>
  </ul>  -->
</template>

<script>
import {reactive} from 'vue';
export default {
    props:['data'],
    setup(props){
        const dutyPharmacy = reactive([]);
        console.log(props);
        // dutyPharmacy.push(data);
    }
}
</script>

<style>

</style>