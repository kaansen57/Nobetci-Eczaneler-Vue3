<template>
  <div class="mt-5 mb-4">
    <div class="col-md-12">
      <h1 class="text-center">Kapsamlı Eczane Listesi</h1>
      <h2 class="text-center">Tüm il ve ilçeler</h2>
    </div>
  </div>
  <div class="row p-5 d-flex justify-content-between">
    <div class="col-md-3 mt-3">
      <div class="icon-container">
        <div class="i i-map-pin"></div>
      </div>
      <h4 class="mb-4 mt-4">Harita</h4>
      <p>
        Eczanelerin adres bilgilerini her geçen gün iyileştiriyor ve harita
        üzerinden kolayca ulaşmanızı sağlıyoruz.
      </p>
    </div>
    <div class="col-md-3 mt-3">
      <div class="icon-container">
        <div class="i i-details"></div>
      </div>
      <h4 class="mb-4 mt-4">Detaylı Bilgiler</h4>
      <p>
        Eczanelerin adres ve telefon bilgileri eksiksiz yayınlıyor, eczane
        hakkındaki yorum ve kullanıcı puanlamaları ile karar vermenizi
        kolaylaştırıyoruz.
      </p>
    </div>
    <div class="col-md-3 mt-3">
      <div class="icon-container">
        <div class="i i-rocket"></div>
        <!-- <img src="@/assets/rocket.svg" alt="" width="40" /> -->
      </div>
      <h4 class="mb-4 mt-4">Kapsamlı Ulaşım</h4>
      <p>
        Acil ilaç gerektiği anda Türkiye'nin en kapsamlı nöbetçi eczane listesi
        parmaklarınızın ucunda. 81 il ve pek çok ilçedeki nöbetçi eczanelere
        hemen ulaşın.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  margin: 0;
  padding: 0;
}
.col-md-3 {
  cursor: pointer;
  transition: top 0.5s ease;
  position: relative;
  top: 0;
}
.col-md-3:hover {
  transition: top 0.5s ease;
  position: relative;
  top: -20px;
}

h1 {
  font-weight: bold;
}
h2 {
  color: #8b92b4;
}
h4 {
  font-weight: bold;
  transition: color 0.5s ease-in-out;
}
.col-md-3:hover h4 {
  transition: color 0.5s ease-in-out;
  color: #ef4848;
}
p {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.8rem;
  color: #8b92b4;
}

.icon-container {
  width: 70px;
  height: 70px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ef4848;
  background-image: linear-gradient(to bottom left, #d66f6f 0%,  #ef4848 100%);
  transition: background-image 0.5s ease;
}

.col-md-3:hover .icon-container {
  transition: background-image 0.5s ease;
}
.i {
  background-size: cover;
  width: 30px;
  height: 30px;
}
.i-map-pin {
  width: 20px;
  height: 30px;
  background-image: url("../assets/map-pin-white.svg");
}

.i-details {
  background-image: url("../assets/details.svg");
}
.i-rocket {
  background-image: url("../assets/rocket.svg");
}
@media screen and (max-width: 768px) {
  .row {
    margin: 0;
    padding: 0;
  }
  h4 {
    text-align: center;
  }
  .icon-container {
    margin: auto;
  }
  p {
    font-size: 16px;
  }
}
</style>