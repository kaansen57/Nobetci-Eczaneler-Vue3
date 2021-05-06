<template>
  <section class="result" v-if="!loading">
    <div class="row mt-5">
      <div class="col-md-12 text-center">
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
        class="pharmacy-wrapper d-flex justify-content-around align-items-center col-sm-12 col-lg-4 p-4 mt-3 mb-3"
      >
        <div class="col-md-6 d-flex justify-content-start align-items-center">
          <span class="pharmacy-letter ">
            {{ pharmacys.EczaneAdi.slice(0, 1) }}
          </span>
          {{ pharmacys.EczaneAdi }}
        </div>
        <div class="vl"></div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="pharmacy-letter pharmacy-city text-center">
            <img src="@/assets/map-pin-white.svg" style="margin-right: 10px" />
            {{ pharmacys.ilce }}
          </div>
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
      console.log(store.getters.getData);
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
  padding: 5px;
}

a {
  color: #555;
  text-decoration: none;
  font-size: 18px;
}
.col-lg-4{
  width:430px;
}
.pharmacy-wrapper {
  border-radius: 10px;
  border:1px solid rgb(228, 227, 227);
  position: relative;
  top: 0;
  transition: top 0.5s ease;
  box-shadow: 0 8px 16px -5px rgba(37, 39, 71, 0.205);
}
.pharmacy-wrapper:hover {
  transition: top 0.5s ease;
  top: -10px;
}
.pharmacy-letter {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9555534 !important;
  
  border-radius: 50px;
  margin-right: 1rem;
  font-weight: bold;
  color: #293e4e91;
  transition: all 0.5s ease;
  padding: 5px 15px;
}

.pharmacy-wrapper:hover .pharmacy-letter {
  transition: all 0.5s ease;
 background-color: #d66f6f !important;
  color: #fff;
}
.pharmacy-city {
  background: #6355f934 !important;
}
.pharmacy-wrapper:hover .pharmacy-city {
  transition: all 0.5s ease;
  background-color: #6f86d6 !important;
  color: #fff;
}
.vl {
  border-right: #e4e1e1 1px solid;
  height: 4rem;
  margin-left: .5rem;
  margin-right: .5rem ;
}

img {
  width: 15px;
}

@media screen and (max-width: 1100px) {
  .pharmach-col{
    width:50% ;
  }
  a {
    font-size: 15px;
  }
  img {
    width: 10px;
  }
}
</style>