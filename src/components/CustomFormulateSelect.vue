<template>
  <div
    :class="`CustomFormulateSelect formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
  >
    <!-- <input
      type="select"
      v-model="context.model"
      v-bind="context.attributes"
      autocomplete="no"
      @keydown.enter.prevent="context.model = selection.label"
      @keydown.down.prevent="increment"
      @keydown.up.prevent="decrement"
      @click.prevent="openList"
      @blur="customBlur"
    /> -->
    <div
      class="CustomFormulateSelect__choosed"
      @blur="customBlur"
      tabindex="0"
      @click.prevent="openList"
    >
      {{ choosedName }}
    </div>
    <ul
      v-if="filteredOptions.length || isOpenList || true"
      class="formulate-input-dropdown CustomFormulateSelect"
    >
      <li
        v-for="(option, index) in filteredOptions"
        :key="option.value"
        v-text="option.label"
        :data-is-selected="selection && selection.value === option.value"
        @mouseenter="selectedIndex = index"
        @click="chooseEl(option.value)"
      />
    </ul>
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
    return {
      selectedIndex: 0,
      isOpenList: false,
    };
  },
  watch: {
    model() {
      this.selectedIndex = 0;
    },
  },
  computed: {
    model() {
      return this.context.model;
    },
    selection() {
      if (this.filteredOptions[this.selectedIndex]) {
        return this.filteredOptions[this.selectedIndex];
      }
      return false;
    },
    choosedLabel() {
      const item = this.context.options.find(
        (option) => option.value === this.context.model
      );
      return item ? item.label : this.context.attributes.placeholder;
    },
    filteredOptions() {
      if (Array.isArray(this.context.options) && this.context.model) {
        const isAlreadySelected = this.context.options.find(
          (option) => option.value === this.context.model
        );
        if (!isAlreadySelected) {
          return this.context.options.filter((option) =>
            option.label
              .toLowerCase()
              .includes(this.context.model.toLowerCase())
          );
        }
      }
      if (this.isOpenList) return this.context.options;
      return [];
    },

    choosedName() {
      const count = this.context.attributes.maxLetters
        ? this.context.attributes.maxLetters
        : false;
      if (count) {
        return this.choosedLabel.length > count
          ? this.choosedLabel.slice(0, count) + "..."
          : this.choosedLabel;
      } else {
        return this.choosedLabel;
      }
    },
  },
  methods: {
    chooseEl(el) {
      this.context.model = el;
      this.isOpenList = false;
    },
    // increment() {
    //   const length = this.filteredOptions.length;
    //   if (this.selectedIndex + 1 < length) {
    //     this.selectedIndex++;
    //   } else {
    //     this.selectedIndex = 0;
    //   }
    // },
    // decrement() {
    //   const length = this.filteredOptions.length;
    //   if (this.selectedIndex - 1 >= 0) {
    //     this.selectedIndex--;
    //   } else {
    //     this.selectedIndex = length - 1;
    //   }
    // },
    openList() {
      this.isOpenList = !this.isOpenList;
    },
    customBlur() {
      this.context.blurHandler();
      setTimeout(() => (this.isOpenList = false), 130);
    },
  },
};
</script>
<style lang="less">
@import "../styles/variables.less";

// @heightOfComponent: auto;

.CustomFormulateSelect {
  position: relative;
  height: @heightInput;

  input {
    width: 100%;
    height: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    top: @heightInput;
    margin: auto;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    z-index: 500;
  }
  li {
    width: 100%;
    cursor: pointer;
    background: #fff;
    color: @main_color1;
    border: 1px solid @main_color1;
    border-bottom: unset;
    padding-left: 1vw;
    &:last-child {
      border-bottom: 1px solid @main_color1;
    }
    &:hover {
      background-color: gold;
      color: #fff;
    }
  }
  li[data-is-selected] {
  }

  &__choosed {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: #fff;
    border: 1px solid gray;
    border-radius: 10px;
    outline: none;
    font-size: @text_size_input;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1vw;
  }

  &.formulate-input-dropdown {
    font-size: @text_size_input;
  }
}
</style>
