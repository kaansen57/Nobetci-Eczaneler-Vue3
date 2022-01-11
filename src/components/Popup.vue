<template>
  <div
    class="popup-container d-flex justify-content-center align-items-center"
    v-if="popupIsActive"
  >
    <div class="popup">
      <div
        class="popup-top d-flex justify-content-between align-items-center p-4"
      >
        <h4>Eczane Detay</h4>
        <a @click="isActive"><i class="fas fa-times"></i></a>
      </div>
      <div class="popup-content d-flex p-4">
        <div class="photo"></div>
        <div class="content ">
          <div class="pharmacy-about">
            <h5>{{ popupData[0].name.split(" ")[0] }} ECZANESİ</h5>
          </div>
          <div class="contact">
            <h5 class="mt-4">Adres Bilgileri</h5>
            <p>{{ popupData[0].address }}</p>
            <a
              :href="`https://www.google.com/maps/@${popupData[0].loc},15z`"
              target="_blank"
            >
              Haritada Görmek İçin Tıklayınız.</a
            >
            <h5 class="mt-4">Telefon Numarası</h5>
            <a :href="`tel:${popupData[0].phone}`"> {{ popupData[0].phone }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRef, computed, onUpdated, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const popupData = computed(() => store.getters.getPopupData);
    const popupIsActive = computed(() => {
      return store.getters.getPopupShow;
    });
    const popupIsActive2 = ref(false);
    const isActive = ref(() => {
      store.commit("setPopupShow", popupIsActive2.value);
    });
    return {
      popupData,
      popupIsActive,
      isActive,
    };
  },
};
</script>

<style>
.popup-container {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.popup {
  width: 900px;
  height: max-content;
  background: #fff;
  border-radius: 20px;
}
.popup-top {
  border-bottom: 1px solid #c0c0c0;
}

.photo {
  width: 40%;
  height: 300px;
  background: url("../assets/photo.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.content {
  width: 60%;
  margin-left: 1rem;
}
.content h5 {
  font-weight: 800;
}
.content a {
  text-decoration: none;
  color: #6355f9;
  font-weight: 800;
  cursor: pointer;
  font-size: 20px;
  transition: color 0.5s ease;
}
.content a:hover {
  text-decoration: none;

  color: #333;
}
.content p {
  font-size: 20px;
}
i {
  cursor: pointer;
  font-size: 28px;
}

@media (max-width: 768px) {
  .popup {
    width: 90%;
    overflow-y: scroll;
    position: relative;
    height: 90%;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 1rem;
  }
  .content h5 {
    margin-top: 2rem;
  }
  .pharmacy-about h5 {
    font-size: 26px;
  }
  .photo {
    width: 300px;
    border-radius: 10px;
  }
  .popup-content {
    display: flex;
    flex-direction: column !important;
    align-items: center;
    justify-content: center;
  }
}
</style>
