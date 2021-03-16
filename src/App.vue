<template>
  <div id="app" class="app">
    <MainBlock />
    <Registration />
  </div>
</template>

<script>
import Registration from "./components/GameRegistration/index";
import MainBlock from "./components/MainBlock";

import "reset-css";
import "animate.css";

export default {
  name: "App",
  components: { Registration, MainBlock },
};
</script>

<style lang="less">
@import "./styles/media.less";
@import "./styles/variables.less";
@import "./assets/fonts/stylesheet.css";

* {
  // transition: 0.35s;
}

#app {
  & > * {
    // max-width: 1440px;
    margin: auto;
  }
}

body {
  background: linear-gradient(
    90deg,
    rgba(158, 47, 127, 1) 0%,
    rgba(126, 57, 140, 1) 100%
  );
  color: #fff;
  // color: @main_color2;
  font-family: "21 Cent", "Sans-serif" !important;
  // background-color: @main_color3;

  background-repeat: repeat;
  background-size: contain;
  // background-color: red;
  @media @desktop {
  }
}

b {
  font-weight: bold;
}
input,
button {
  outline: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  opacity: 1;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

//Строковые элементы

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}

a {
  text-decoration: unset;
}

.btn {
  cursor: pointer;
  width: 94.2vw;
  padding: 1.6vw 0;
  background: #7e398c;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #000000;
  border-radius: 91px;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-family: "Open sans";
  color: @main_color2;
  font-size: 6.5vw;
  margin: auto;
  &[disabled] {
    opacity: 0.35;
    cursor: not-allowed;
  }
  @media @desktop {
    // width: 31vw;
    // font-size: 2.35vw;
    // text-transform: none;
    // padding: 1.5vw 0;
    margin-top: 1.5vw;
    font-size: 2vw !important;
    padding: 1% 0 !important;
    width: 25vw !important;
    border-width: 4px;

    &:hover:not([disabled]) {
      // color: @main_color1;
      // background: #48c13c;
    }
  }
}
h2 {
  font-size: 10.3vw;
  text-align: center;
  @media @desktop {
    font-size: 4vw;
  }
}
</style>
