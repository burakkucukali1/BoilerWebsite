<template>
  <div id="container">
    <nav>
      <div class="logo" >
       <a href="/"><img src="../assets/Logo.png" alt /></a> 
      </div>
      <ul :class="isActive?activeClass:''" class="nav-links">
        <li>
          <a href="#newsSection">Haberler ve Duyurular</a>
        </li>
        <li>
          <span class="symbol">&#x7c;</span>
        </li>
        <li>
          <a  href="#contactSection">İletişim</a>
        </li>
      </ul>
      <div  @click="isActive=!isActive" class="burger">
        <img src="../assets/BurgerMenu.png" alt />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
      return {
          isActive: false,
          activeClass:'nav-active'
      }
  },
  methods: {
      onClickBurgerMenu(){
          this.isActive=true    
      }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 1.25em;
  font-weight: 400;
}
.nav-links a:hover {
  color:#f08041
}
.nav-links a {
  text-decoration: none;
  color: #000000;
  opacity: 56%;
}
.nav-links li {
  list-style: none;
}
.logo {
  color: rgb(226, 226, 226);
  margin-top: 3vh;
  margin-bottom: 3vh;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 20%;
  margin-top: 7vh;
}
.symbol {
  color: rgb(226, 226, 226);
}
.burger {
  display: none;
}

@media screen and (max-width: 1024) {
  .nav-links {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
    body {
        overflow-x: hidden;
    }
  .nav-links {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 5vh;
    opacity: 70%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    width: 40%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
 .nav-active{
      transform: translateX(0%);
  }
  .symbol {
    display: none;
  }
  .burger { 
    display: block;
    cursor: pointer;
  }
}
 
</style>