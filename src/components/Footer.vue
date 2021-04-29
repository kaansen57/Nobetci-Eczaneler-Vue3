<template>
  <div class="footer-wave"></div>
  <footer>
    <div class="mb-5">
      <div class="col-md-12 text-center">
        <img src="@/assets/logo-ico.png" alt="Nöbetçi Eczaneler" width="40" />
        <h1 class="text-center">Türkiye’nin Nöbetçi Eczane Sitesi</h1>
      </div>
    </div>
    <div class="popular-cities d-flex justify-content-center">
      <div class="col-md-9 text-center">
        <p>
          <b>Popüler Şehirler</b> İstanbul Nöbetçi Eczane, İzmir Nöbetçi Eczane,
          Ankara Nöbetçi Eczane, Çanakkale Nöbetçi Eczane, Bursa Nöbetçi Eczane,
          Mersin Nöbetçi Eczane, Antalya Nöbetçi Eczane, Samsun Nöbetçi Eczane
        </p>
      </div>
    </div>
    <div class="terms">
      <div class="col-md-12">
        <ul>
          <a href="#">
            <li>Hakkımızda</li>
          </a>
          <a href="#">
            <li>İletişim</li>
          </a>
          <a href="#">
            <li>Gizlilik Politikası</li>
          </a>
          <a href="#">
            <li>Kullanım Sözleşmesi</li>
          </a>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <h5 class="text-center">© Copyright 2021 - Her hakkı saklıdır.</h5>
    </div>
    <div class="flag text-center mt-5">
      <img src="@/assets/turkey.svg" width="40" />
    </div>
    <div class="user-information mt-5 d-flex justify-content-center">
      <p class="col-md-10 text-center">
        Nöbetçi eczane bilgileri, illerin eczaneler odasından günlük otomatik
        olarak çekilmektedir. Bizden kaynaklı olmayan sebeplerden dolayı bazı
        eczanelerin nöbet ya da adres durumu hatalı olabilmektedir. Lütfen
        eczaneye gitmeden önce telefonla arayıp, teyit ediniz. Olası hatalı
        bilgilerden dolayı sorumluluk bize ait değil, bu siteyi kullanarak bunu
        kabul etmiş sayılırsınız.
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-wave {
  display: block;
  background: url("../assets/footer-wave.svg");
  background-position: center center;
  background-size: cover;
  height: 300px;
}
footer {
  padding: 40px;
  min-height: 500px;
  padding-top: 40px;
  background-color: #74ebd5;
  background-image: linear-gradient(to bottom left, #6f86d6 0%, #48c6ef 100%);
}
a {
  text-decoration: none;
}

p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

h1 {
  font-family: "Sofia Pro", sans-serif;
  letter-spacing: 3px;
  color: #fff;
  font-weight: bolder;
}
h5 {
  color: #fff;
}

ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
}

ul li {
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  padding: 30px;
}

ul li:hover {
  color: #372879;
}

@media screen and (max-width: 768px) {
  
  h1{
    font-size:24px;
  }
  ul li , p ,h5  {
    font-size: 14px;
    
  }
}
</style>