<template>
  <div class="footer-wave" id="contact"></div>
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
            <li>Ana Sayfa</li>
          </a>
          <a href="#eczaneler">
            <li>Tüm Eczaneler</li>
          </a>
          <a href="#contact">
            <li>İletişim</li>
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
.flag img{
  border-radius: 5px;
  border:1px solid #fff;
}
.footer-wave {
  display: block;
  background: url("../assets/footer-wave2.png");
  background-position: center center;
  background-size: cover;
  height: 300px;
}
footer {
  padding: 40px;
  min-height: 500px;
  padding-top: 40px;
  background-color: #ef4848;
  background-image: linear-gradient(to bottom left, #ef4848 0%, #d66f6f 100%);
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
  color: #792828;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 24px;
  }
  ul li,
  p,
  h5 {
    font-size: 14px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
