<template>
  <div
    :class="`CustomFormulateCheckbox formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
  >
    <input
      type="checkbox"
      v-model="context.model"
      v-bind="context.attributes"
    />
    <div
      :class="{
        CustomFormulateCheckbox__pseudoInput: true,
        active: context.model,
      }"
    >
      <!-- <img src="./../assets/icons/apply_icon.png" alt="" /> -->
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
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

// @heightOfComponent: auto;


</style>
