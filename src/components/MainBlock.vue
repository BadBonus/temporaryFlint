<template>
  <div class="MainBlock">
    <div class="MainBlock__firstPart">
      <h1>Монеты <br /><span>за багеты!</span></h1>
      <img
        src="../assets/client.png"
        alt="монеты за багеты"
        class="MainBlock_user"
        v-if="!isMobileSize"
      />
      <img
        v-if="isMobileSize"
        src="../assets/client_mob.png"
        alt="монеты за багеты"
        class="MainBlock_user"
      />
      <!--
      <img
        src="../assets/mainBlock_line.png"
        alt="декорация линии"
        class="MainBlock__decorationLines"
      /> -->
      <!-- <img src="../assets/mainBlock_line_mob.png" alt="" class="MainBlock__decorationLines"> --><img
        v-if="!isMobileSize"
        src="../assets/desktopLines.svg"
        class="desktopLines"
        alt="lines"
      />
      <div class="MainBlock__lines">
        <!-- <template v-if="!isMobileSize">
          <img src="../assets/lines/Vector1.svg" alt="line" />
          <img src="../assets/lines/Vector2.svg" alt="line" />
          <img src="../assets/lines/Vector3.svg" alt="line" />
          <img src="../assets/lines/Vector4.svg" alt="line" />
          <img src="../assets/lines/Vector5.svg" alt="line" />
          <img src="../assets/lines/Vector6.svg" alt="line" />
        </template> -->

        <template v-if="isMobileSize">
          <img src="../assets/lines/Vector2_m.svg" alt="line" />
          <img src="../assets/lines/Vector3_m.svg" alt="line" />
          <img src="../assets/lines/Vector4_m.svg" alt="line" />
          <img src="../assets/lines/Vector5_m.svg" alt="line" />
          <img src="../assets/lines/Vector6_m.svg" alt="line" />
        </template>
      </div>
    </div>
    <div class="MainBlock__secondPart">
      <h2>Условия акции</h2>
      <ul class="MainBlock__listActions">
        <li class="MainBlock__action">
          <div class="MainBlock__actionIcon MainBlock__actionIcon_buy">
            <img src="../assets/icons/buy_icon.png" alt="купи" />
          </div>
          <h4>
            Купи <br />
            <span> акционную пачку </span>
          </h4>
        </li>
        <li class="MainBlock__action">
          <div class="MainBlock__actionIcon MainBlock__actionIcon_reg">
            <img src="../assets/icons/reg_icon.png" alt="зарегистрируй" />
          </div>
          <h4>
            Зарегистрируй <br />
            <span>
              карточку с кодом <br />
              внутри упаковки
            </span>
          </h4>
        </li>
        <li class="MainBlock__action">
          <div class="MainBlock__actionIcon MainBlock__actionIcon_get">
            <img src="../assets/icons/get_icon.png" alt="Получи" />
          </div>
          <h4>
            Получи <br />
            <span> 1 рубль на телефон </span>
          </h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBlock",
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    isMobileSize() {
      return this.$vssWidth < this.$desktopSize;
    },
  },
  methods: {},
};
</script>
<style lang="less">
@import "../styles/media.less";

@-moz-document url-prefix() {
  .MainBlock {
    @media @desktop {
    }
  }
}

.MainBlock {
  position: relative;
  padding-bottom: 21vw;
  @media @desktop {
    padding-bottom: 0;
  }

  h1 {
    font-weight: 500;
    line-height: 75%;
    position: relative;
    margin-top: 0;
    font-size: 21.62vw;
    margin: auto;
    text-align: center;
    padding-top: 13.1vw;

    @media @desktop {
      line-height: 75%;
      position: absolute;
      left: 6%;
      top: 0;
      margin-top: 5%;
      text-align: left;

      font-size: 8.42vw;
      padding-top: 0.7vw;
    }
    span {
      display: block;
      margin-top: 2.6vw;
      font-size: 17vw;
      @media @desktop {
        display: inline;
        margin-top: 0;
        font-size: 65.7%;
      }
    }
  }

  .MainBlock_user {
    display: block;
    z-index: 5;

    position: relative;
    width: 100%;
    margin-top: 7.4vw;
    position: relative;
    @media @desktop {
      width: 25vw;
      margin-top: 0;
      margin: auto;
      padding-top: 0;

      position: relative;
      top: -0.5vw;
      margin-right: 3vw;
      width: 58.52vw;
    }
  }

  // .MainBlock__decorationLines {
  //   position: absolute;
  //   width: 100%;
  //   z-index: 1;
  //   @media @desktop {
  //     margin-top: 35.5%;
  //     width: 100%;
  //     top: 0;
  //   }
  // }

  .MainBlock__lines {
    position: absolute;
    right: 0;
    z-index: 1;
    width: 100%;
    top: 158.3vw;
    height: 26.7vw;

    @media @desktop {
      top: 74.5vw;
      height: 10vw;
    }

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      &:nth-child(1) {
        bottom: 50.8vw;
        @media @desktop {
          bottom: 31.4vw;
        }
      }
      &:nth-child(2) {
        bottom: 41.8vw;
        @media @desktop {
          bottom: 25.8vw;
        }
      }
      &:nth-child(3) {
        bottom: 31.1vw;
        @media @desktop {
          bottom: 20.1vw;
        }
      }
      &:nth-child(4) {
        bottom: 20.7vw;
        @media @desktop {
          bottom: 14.4vw;
        }
      }
      &:nth-child(5) {
        bottom: 8.6vw;
        @media @desktop {
          bottom: 8.6vw;
        }
      }
      &:nth-child(6) {
        bottom: 4vw;
      }
    }
  }
  h2 {
    font-weight: 400;
    font-size: 6.35vw;
    padding-top: 16.8vw;
    text-transform: uppercase;

    @media @desktop {
      font-size: 3.8vw;
      padding-top: 7.1vw;
    }
  }
  .MainBlock__listActions {
    text-align: center;
    margin-top: 22vw;
    @media @desktop {
      display: flex;
      margin: auto;
      width: 69.5%;
      justify-content: space-between;
      margin-top: 5.4%;
    }

    li {
      margin: auto;
      @media @desktop {
        margin: unset;
      }
    }
  }
  .MainBlock__actionIcon {
    width: 100%;
    height: 8.7vw;
    display: flex;
    justify-content: center;
    align-items: center;

    &_buy {
      img {
        width: 10.9vw;
        @media @desktop {
          width: 22.5%;
        }
      }
    }

    &_reg {
      img {
        width: 13.5vw;
        @media @desktop {
          position: relative;
          margin-top: 3%;
          width: 26%;
        }
      }
    }
    &_get {
      img {
        width: 16.5vw;
        @media @desktop {
          position: relative;
          margin-top: 3%;
          width: 32.1%;
        }
      }
    }
  }
  .MainBlock__action {
    width: auto;
    &:not(:last-of-type) {
      margin-bottom: 17.6vw;
    }
    @media @desktop {
      width: 33%;
      margin-bottom: 0 !important;
    }
    h4 {
      text-transform: uppercase;
      margin-top: 10.8vw;
      font-size: 5vw;
      @media @desktop {
        text-transform: uppercase;
        font-size: 1.62vw;
        font-weight: 600;
        margin-top: 3.7vw;
      }
      span {
        display: block;
        text-transform: lowercase;
        font-weight: 500;
        padding-top: 1vw;
        // font-size: 4.9vw;
        @media @desktop {
          padding-top: 1.3vw;
        }
      }
    }
  }
  .MainBlock__secondPart {
    @media @desktop {
      padding-bottom: 7.6%;
    }
  }

  .desktopLines {
    position: absolute;
    top: 16.6vw;
    width: 100%;
  }
}
</style>
