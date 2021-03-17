<template>
  <footer class="Footer">
    <h2>Период акции</h2>
    <ul class="Footer__timing">
      <li>
        <span
          >Срок проведения Акции <br class="no-desktop" />
          «Монеты за багеты!»
        </span>
        <p>с 20.03.21 по 30.07.21 г.</p>
      </li>
      <li>
        <span>Срок совершения покупок в рамках участия в Акции </span>
        <p>с 20.03.21 по 30.07.21 г.</p>
      </li>
    </ul>
    <ul class="Footer__otherInfo">
      <li>
        <span>
          Наименование рекламной акции «Монеты за багеты!». <br />
          ООО "ЭфСиБи Бел", УНП 193185741.
        </span>
      </li>
      <li>
        <span>
          Телефон горячей линии по вопросам проведения Акции в период с 20.03.21
          – 04.07.21 года (включительно): +375 29 608 19 49.
          <br />
          Время работы: с 10:00 до 14:00 в будние дни.
        </span>
      </li>
    </ul>
    <img
      src="../assets/footer_line.png"
      class="Footer__decoration"
      alt="декорация"
      v-if="!isMobileSize"
    />
    <img
      v-if="isMobileSize"
      src="../assets/footer_line_mob.png"
      class="Footer__decoration"
      alt="декорация"
    />
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
@import "../styles/variables.less";
@import "../styles/media.less";

@-moz-document url-prefix() {
  .Footer {
    @media @desktop {
    }
  }
}

.Footer {
  position: relative;
  padding-bottom: 31.8vw;
  @media @desktop {
    padding-bottom: 15.3vw;
  }
  h2 {
    font-weight: 400;
    text-transform: uppercase;
    padding-top: 16.3vw;
    font-size: 6.5vw;
    @media @desktop {
      font-size: 3.7vw;
      padding-top: 6.4vw;
    }
  }
  .Footer__timing {
    font-weight: 400;
    margin-top: 10.8vw;
    font-size: 5vw;
    line-height: 7vw;
    @media @desktop {
      margin-top: 5.7vw;
      font-size: 1.55vw;
      line-height: unset;
    }
    li {
      margin: auto;
      text-align: center;
      margin-bottom: 11.5vw;
      @media @desktop {
        margin-bottom: 4.6vw;
      }
      p {
        position: relative;
        @media @desktop {
          margin-top: 1.6vw;
        }
        &::before {
          content: "";
          position: absolute;
          width: 60vw;
          top: 7.2vw;
          background: #fff;
          height: 4px;
          left: 0;
          right: 0;
          margin: auto;
          @media @desktop {
            width: 18.6vw;
            top: 2.2vw;
          }
        }
      }
    }
  }
  .Footer__otherInfo {
    text-align: center;
    font-size: 2.77vw;
    padding-top: 4.7vw;
    line-height: 4.4vw;

    @media @desktop {
      font-size: 0.96vw;
      padding-top: 1.9vw;
      line-height: 1.8vw;
    }
    li:not(:last-of-type) {
      margin-bottom: 5.2vw;

      @media @desktop {
        margin-bottom: 1.8vw;
      }
    }
  }

  .Footer__decoration {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 88.5%;
    @media @desktop {
      width: 65.14%;
    }
  }
}
</style>
