<template>
  <div class="MainBlock">
    <div class="MainBlock__firstPart">
      <h1>Монеты <br /><span>за багеты!</span></h1>
      <img
        src="../assets/client.png"
        alt="монеты за багеты"
        class="MainBlock_user"
      />
      <!-- <img src="../assets/client_mob.png" alt="монеты за багеты" class="MainBlock_user"> -->

      <img
        src="../assets/mainBlock_line.png"
        alt="декорация"
        class="MainBlock__decorationLines"
      />
      <!-- <img src="../assets/mainBlock_line_mob.png" alt="" class="MainBlock__decorationLines"> -->
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
  computed: {},
  methods: {},
};
</script>
<style lang="less">
@import "../styles/variables.less";
@import "../styles/media.less";

@-moz-document url-prefix() {
  .MainBlock {
    @media @desktop {
    }
  }
}

.MainBlock {
  position: relative;
  @media @desktop {
  }

  h1 {
    @media @desktop {
      line-height: 75%;
      position: absolute;
      left: 3.3%;
      top: 0;
      margin-top: 5%;
      font-size: 9.92vw;
      font-weight: 500;
      span {
        font-size: 65.7%;
      }
    }
  }

  .MainBlock_user {
    display: block;
    z-index: 5;

    position: relative;
    @media @desktop {
      width: 25vw;
      width: 70.4%;
      margin: auto;
      padding-top: 8%;
      margin-right: 0.45%;
    }
  }

  .MainBlock__decorationLines {
    position: absolute;
    width: 100%;
    z-index: 1;
    @media @desktop {
      margin-top: 35.5%;
      width: 100%;
      top: 0;
    }
  }
  h2 {
    @media @desktop {
      font-size: 3.8vw;
      font-weight: 400;
      text-transform: uppercase;
      padding-top: 7.1vw;
    }
  }
  .MainBlock__listActions {
    @media @desktop {
      display: flex;
      margin: auto;
      width: 69.5%;
      justify-content: space-between;
      text-align: center;
      margin-top: 5.4%;
    }
  }
  .MainBlock__actionIcon {
    width: 100%;
    height: 8.7vw;
    display: flex;
    justify-content: center;
    align-items: center;

    &_buy {
      @media @desktop {
        img {
          width: 22.5%;
        }
      }
    }

    &_reg {
      @media @desktop {
        img {
          position: relative;
          margin-top: 3%;
          left: 5%;
          width: 26%;
        }
      }
    }
    &_get {
      @media @desktop {
        img {
          position: relative;
          margin-top: 3%;
          width: 32.1%;
        }
      }
    }
  }
  .MainBlock__action {
    width: 33%;
    @media @desktop {
    }
    h4 {
      text-transform: uppercase;
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
}
</style>
