<template>
  <div class="MainBlock">
    <div class="MainBlock__firstPart">
      <h1>Монеты <br /><span>за багеты</span></h1>
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
    <div class="MainBlock__secondPart"></div>
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
    position: absolute;
    left: 0;
    top: 0;
  }

  .MainBlock_user {
    position: relative;
    @media @desktop {
      width: 25vw;
    }
  }

  .MainBlock__decorationLines {
    position: absolute;
    width: 100%;
    @media @desktop {
    }
  }
}
</style>
