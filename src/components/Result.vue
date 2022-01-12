<template>
  <section class="result" v-if="!loading" id="results">
    <div class="row mt-5">
      <div class="col-md-12 text-center">
        <h1 v-if="dutyPharmacy.length">
          <b>{{ selectedCity }}</b> için Toplam Sonuç :
          {{ dutyPharmacy[0].length }}
        </h1>
      </div>
    </div>
    <div class="row d-flex justify-content-around">
      <a
        v-for="(pharmacys, i) in dutyPharmacy[0]"
        :key="i"
        @click="popupData(pharmacys, i)"
        class="pharmacy-wrapper d-flex justify-content-between align-items-center col-sm-12 col-lg-4 p-4 mt-3 mb-3 "
      >
        <div class="col-md-6 d-flex justify-content-start align-items-center">
          <span class="pharmacy-letter ">
            {{ pharmacys.name.slice(0, 1) }}
          </span>
          {{ pharmacys.name.split(" ")[0] }} ECZANESİ
        </div>
        <div class="vl"></div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="pharmacy-letter pharmacy-city text-center">
            <img src="@/assets/map-pin-white.svg" style="margin-right:10px" />
            {{ pharmacys.dist }}
          </div>
        </div>
      </a>
    </div>
    <Popup></Popup>
  </section>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Popup from "./Popup.vue";
export default {
  setup() {
    const popupIsActive = ref(() => store.getters.getPopupShow);
    const store = useStore();
    const loading = computed(() => store.getters.getLoading);
    const selectedCity = computed(() => store.getters.getSelectedCityOnClick);
    const dutyPharmacy = computed(() => store.getters.getData);
    const popupData = ref((pharmacys) => {
      popupIsActive.value = true;
      store.commit("setPopupData", pharmacys);
      store.commit("setPopupShow", popupIsActive.value);
    });

    return {
      popupData,
      popupIsActive,
      dutyPharmacy,
      selectedCity,
      loading,
    };
  },
  components: {
    Popup,
  },
};
</script>

<style scoped>
section {
  position: relative;
}
.row {
  margin: 0;
  padding: 5px;
}

a {
  color: #555;
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;
}
.col-lg-4 {
  width: 420px;
}
.pharmacy-wrapper {
  border-radius: 10px;
  border: 1px solid rgb(228, 227, 227);
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
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

img {
  width: 15px;
}

@media screen and (max-width: 1100px) {
  .pharmach-col {
    width: 50%;
  }
  a {
    font-size: 15px;
  }
  img {
    width: 10px;
  }
}
</style>
