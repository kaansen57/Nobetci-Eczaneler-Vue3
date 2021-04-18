<template>
  <div class="row">
    <div class="nav-menu">
      <div class="logo">
        <img src="@/assets/logo.png" width="70" alt="Nöbetçi Eczane" />
      </div>

      <div class="menu-items">
        <ul>
          <a href="#"> <li class="active">Homepage</li></a>
          <a href="#"> <li class="">Homepage</li></a>
          <a href="#"> <li class="">Homepage</li></a>
          <a href="#"> <li class="">Homepage</li></a>
          <a href="#">
            <li class="login"><span>Login</span></li></a
          >
        </ul>
        <a href="#" class="menu-show">
          <li><span>X</span></li></a
        >
      </div>
    </div>
  </div>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6C8AD7" fill-opacity="1" d="M0,192L60,197.3C120,203,240,213,360,192C480,171,600,117,720,106.7C840,96,960,128,1080,154.7C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> -->
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

<style>
.nav-menu {
  display: flex;
}
.logo {
  padding-left: 20px;
  width: 10%;
}
.menu-items {
  width: 90%;
}
.row {
  padding-top: 40px;
  height: 600px;
  background-color: #74ebd5;
  background-image: linear-gradient(to bottom left, #48c6ef 0%, #6f86d6 100%);
}
.menu-show {
  display: none;
  padding-right: 20px;
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
  background-color: #fff;
  color: #313131;
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

@media (max-width: 1100px) {
  .login {
    width: 100px;
  }
  a {
    font-size: 14px;
  }
}

@media (max-width: 885px) {
  ul {
    display: none;
  }
  .menu-show {
    display: block;
    float: right;
  }
}
</style>