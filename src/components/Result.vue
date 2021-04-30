<template>
  <section class="result">
    <div class="row mt-5">
      <div class="col-md-12 text-center" v-if="!loading">
        <h1 v-if="cityCount">
          <b>{{ selectedCity }}</b> için Toplam Sonuç : {{ cityCount.length }}
        </h1>
        <!-- <ul>
        <li v-for="(pharmacys, i) in dutyPharmacy[0]" :key="i">
          {{ pharmacys.EczaneAdi }}
          {{ pharmacys.Adresi }}
          {{ pharmacys.ilce }}
          {{ pharmacys.latitude }}
          {{ pharmacys.Telefon }}
        </li>
      </ul> -->
      </div>
    </div>
    <div class="row d-flex justify-content-around">
      <a
        href="#"
        v-for="(pharmacys, i) in dutyPharmacy[0]"
        :key="i"
        class="pharmacy-wrapper d-flex align-items-center col-md-4 p-4 mt-3 mb-3"
      >
        <div class="col-md-6 d-flex justify-content-start align-items-center">
          <span class="pharmacy-letter">
            {{ pharmacys.EczaneAdi.slice(0, 1) }}
          </span>
          {{ pharmacys.EczaneAdi }}
        </div>
        <div class="vl"></div>
        <div class="col-md-6 d-flex justify-content-center">
         <img src="@/assets/map-pin.svg" width="20" style="margin-right:10px;" > {{ pharmacys.ilce }}
        </div>
      </a>
    </div>
  </section>
</template>
<script>
import { reactive, computed, ref, onBeforeMount, onUpdated } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const cityCount = ref(0);
    const loading = computed(() => store.getters.getLoading);
    const selectedCity = computed(() => store.getters.getSelectedCityOnClick);
    const dutyPharmacy = computed(() => {
      return store.getters.getData;
    });

    onUpdated(() => {
      cityCount.value = dutyPharmacy.value[0];
    });

    return {
      dutyPharmacy,
      cityCount,
      selectedCity,
      loading,
    };
  },
};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}
.col-md-4 {
  width: 30% !important;
  border-radius: 5px;
}
a {
  color: #555;
  text-decoration: none;
  font-size: 18px;
}
.pharmacy-wrapper {
  position: relative;
  top: 0;
  transition: top 0.5s ease;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.096);
}
.pharmacy-wrapper:hover {
  transition: top 0.5s ease;
  top: -10px;
}
.pharmacy-letter {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5ba9e459;
  border-radius: 50px;
  margin-right: 1rem;
  font-weight: bold;
  color: #777;
  transition: all 0.5s ease;
  padding:20px;
}

.pharmacy-wrapper:hover .pharmacy-letter {
  transition: all 0.5s ease;
  background-color: #6f86d6;
  color: #fff;
}
.vl{
border-right:#e4e1e1 1px solid;
height:3rem;
margin-left:15px;
margin-right:5px;
}
</style>