<template>
  <div class="footer-wave"></div>
  <footer>
    <div class="row mb-5">
      <div class="col-md-12 text-center">
        <img src="@/assets/logo-ico.png" alt="Nöbetçi Eczaneler" width="40" />
        <h1 class="text-center">Türkiye’nin Nöbetçi Eczane Sitesi</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          aperiam repellat error rem, suscipit voluptatum, autem odit
          praesentium quas perferendis explicabo, sed voluptas doloremque
          tempora quisquam veritatis amet laboriosam officia?
        </h3>
      </div>
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
  height: 500px;
  padding-top: 40px;
  background-color: #74ebd5;
  background-image: linear-gradient(to bottom left, #6f86d6 0%, #48c6ef 100%);
}
h1 {
  font-family: "Sofia Pro", sans-serif;
  letter-spacing: 3px;
  color: white;
  font-weight: bolder;
}
</style>