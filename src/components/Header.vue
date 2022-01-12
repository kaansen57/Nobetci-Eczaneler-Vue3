<template>
  <header class="nav-menu">
    <div class="menu">
      <a href="/" class="logo">
        <img src="@/assets/logo.png" width="180" alt="Nöbetçi Eczane" />
      </a>
      <ul>
        <a href="/"> <li class="active">Ana Sayfa</li></a>
        <a href="#eczaneler"> <li>Tüm Eczaneler</li></a>
        <a href="#contact"> <li>İletişim</li></a>
      </ul>
    </div>
    <div class="header-content">
      <div class="first-column ">
        <h2>Nöbetçi Eczaneleri Kolayca Bul!</h2>
        <h3>
          Türkiye'de bulunan nöbetçi eczaneleri günlük olarak kolayca
          bulabilirsiniz.
        </h3>
        <a href="#eczaneler" class="search"><span>Hemen Ara</span></a>
      </div>
      <div class="second-column ">
        <kinesis-container class="kinesis">
          &nbsp;
          <kinesis-element class="phill-1" :strength="1" >
            <img src="@/assets/header/p1.png" width="200" alt="" />
          </kinesis-element>
          <kinesis-element class="phill-2" :strength="1" >
            <img src="@/assets/header/p2.png" width="150" alt="" />
          </kinesis-element>
          <kinesis-element class="phill-3" :strength="1" >
            <img src="@/assets/header/p3.png" width="150" alt="" />
          </kinesis-element>
          <kinesis-element class="phill-4" :strength="1" >
            <img src="@/assets/header/p4.png" width="150" alt="" />
          </kinesis-element>
          <kinesis-element class="phill-5" :strength="1" >
            <img src="@/assets/header/p5.png" width="150" alt="" />
          </kinesis-element>
          <kinesis-element class="phill-6" :strength="1" >
            <img src="@/assets/header/p6.png" width="150" alt="" />
          </kinesis-element>
        </kinesis-container>
      </div>
    </div>
  </header>
  <div class="header-wave"></div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  setup() {
    const store = useStore();
    const titleSelectedCity = computed(() => store.state.selectedCityOnClick);
    return {
      titleSelectedCity,
    };
  },
};
</script>

<style scoped>
.nav-menu {
  display: flex;
  flex-direction: column;
  height: 450px;
  padding: 2rem 1rem 0 1rem;
  background-color: #74ebd5;
  background-image: linear-gradient(to bottom left, #d66f6f 0%,  #ef4848 100%);
}
.header-content {
  width: 100%;
  height: 400px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.first-column {
  max-width: 600px;
  margin-top: 3rem;
}
.first-column h2 {
  color: #fff;
  font-weight: 800;
}
.first-column h3 {
  margin-top: 3rem;
  color: #fff;
  font-weight: 800;
}
.second-column {
  height: 400px;
  width: 500px;
  background: url("../assets/header/banner.png") no-repeat;
  background-size: cover;
  position: relative;

  
}
.phill-1,
.phill-2,
.phill-3,
.phill-4,
.phill-5,
.phill-6 {
  position: absolute;
  transform: scale(1.1);
  
}
.phill-1 {
  left: 0px;
  top: 30px;
  transform: scale(1.1);
}
.phill-2 {
  right: 50px;
  top: 0px;
}
.phill-3 {
  left: -60px;
  top: 200px;
}
.phill-4 {
  left: 30px;
  top: 350px;
}
.phill-5 {
  right: 80px;
  top: 330px;
  transform: scale(1.1);


}
.phill-6 {
  right: 20px;
  top: 150px;
  transform: scale(1.1);

}
.kinesis {
  position: relative;
}
.menu {
  width: 100%;
  display: flex;
  align-items: center;
}

.header-wave {
  display: block;
  height: 250px;
  background: url("../assets/wave2.png");
  background-size: cover;
  background-repeat: no-repeat;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
ul a {
  margin: 0 2.5%;
}
ul a li {
  display: inline-block;
  text-align: center;
  padding: 10px 20px;
  border-radius: 50px;
  transition: background-color 0.2s ease;
}
ul li:hover {
  background-color: rgba(49, 49, 49, 0.173);
  transition: background-color 0.2s ease;
}
.active {
  background-color: rgba(49, 49, 49, 0.173);
  transition: background-color 0.2s ease;
}

 .search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 60px;
  transition: all 0.4s ease;
  color: #fff;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.185);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 6px;
  margin-top: 4rem;
  position: relative;
    animation: fly 3s reverse;
}
.search span {
  font-size: 1.1rem;
  font-weight: 800;
}
.search:hover{
  margin-top: 5rem;
}
a {
  font-size: 16px;
  text-decoration: none;
  color: white;
  font-weight: 500;
}
a:hover {
  color: white;
}
a > span {
  margin-left: 10px;
  color: white;
}

.bottom-svg {
  position: relative;
  bottom: -340px;
}
@media (max-width:1100px){
  .header-content{
    justify-content: center;
  }
  .first-column{
    margin-top: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .search{
    margin-top: 3rem;
  }
  .search:hover{
    margin-top: 4rem;
  }
  .second-column{
    display: none;
  }
  
}
@media (max-width: 768px) {
  ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul a li {
    width: max-content;
    padding: 10px 10px;
  }
  a {
    font-size: 0.9rem;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .logo {
    margin-bottom: 2rem;
  }
  .nav-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
   .search{
     width: 200px;
    margin-top: 1rem;
    transform: scale(.8);
  }
  .search:hover{
    margin-top: 1rem;
  }
}
</style>
