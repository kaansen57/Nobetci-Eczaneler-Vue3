<template>
  <header class="nav-menu">
    <div class="logo">
      <a href="">
        <img src="@/assets/logo.png" width="180" alt="Nöbetçi Eczane" />
      </a>
    </div>
    <div class="menu-items">
      <ul>
        <a href="/"> <li class="active">Ana Sayfa</li></a>
        <a href="#eczaneler"> <li class="">Tüm Eczaneler</li></a>
        <a href="#contact"> <li class="">İletişim</li></a>
      </ul>
      <!-- <a href="#" class="menu-show"> <i class="fas fa-ellipsis-h"></i></a> -->
    </div>
  </header>
  <div class="header-wave"></div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
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
  height: 450px;
  padding:3rem 1rem 0 1rem;
  background-color: #74ebd5;
  background-image: linear-gradient(to bottom left, #48c6ef 0%, #6f86d6 100%);
}
.header-wave {
  display: block;
  height: 250px;
  background: url("../assets/wave.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.logo {
  width: 100%;
}
.menu-items{
  width:100%;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
}
ul a {
  margin: 0 2.5%;
}
ul a li {
  display: block;
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
.login {
  transition: all 0.4s ease;
  border: 1px solid #fff;
  width: 150px;
  text-align: center;
}
.login span {
  font-weight: bold;
}
.login:hover {
  transition: all 0.4s ease;
  color: #fff;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.185);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
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

@media (max-width: 768px) {
  ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul a li {
    width: max-content;
    padding: 5px 10px;
  }
  a {
    font-size: 1rem;
  }
  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .nav-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
