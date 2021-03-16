<template>
  <div class="GameRegistration" id="GameRegistration">
    <ValidationObserver ref="form" v-slot="{ invalid, reset }">
      <br v-if="isFinishedRegistration" />
      <h2 class="registrationEnd" v-if="!isFinishedRegistration">
        Регистрация
      </h2>
      <h2 class="registrationEnd" v-if="isFinishedRegistration">
        Регистрация завершена
      </h2>
      <br v-if="isFinishedRegistration" />
      <form
        class="GameRegistration__form"
        @submit.prevent="onSubmit"
        v-if="!isFinishedRegistration"
      >
        <div class="GameRegistration__formContent">
          <span
            class="GameRegistration__blockContentTitle GameRegistration__blockContentTitle-duoBlock"
          >
            ФИО
          </span>
          <div
            class="GameRegistration__blockContent GameRegistration__FIOBlock"
          >
            <ValidationProvider
              mode="lazy"
              tag="div"
              name="surname"
              rules="required"
              v-slot="{ errors }"
              class="ValidationProvider"
            >
              <input
                v-model="model.surname"
                type="text"
                placeholder="Фамилия*"
              />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              mode="lazy"
              tag="div"
              name="name"
              rules="required"
              v-slot="{ errors }"
              class="ValidationProvider"
            >
              <input v-model="model.name" type="text" placeholder="Имя*" />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              tag="div"
              name="secondName"
              v-slot="{ errors }"
              class="ValidationProvider"
            >
              <input
                v-model="model.secondName"
                type="text"
                placeholder="Отчество"
              />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <span
            class="GameRegistration__blockContentTitle GameRegistration__blockContentTitle-duoBlock"
          >
            Контактные данные
          </span>
          <div
            class="GameRegistration__blockContent GameRegistration__techInfo"
          >
            <div class="GameRegistration__techInfo__Phone">
              <ValidationProvider
                tag="div"
                v-slot="{ errors }"
                rules="required|length:13"
                name="phone"
                class="ValidationProvider"
              >
                <input
                  v-model="model.phone"
                  placeholder="+375__ __ __*"
                  @click="phoneClick"
                  @blur="phoneBlur"
                  type="text"
                />
                <span class="errorContainer">{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider
                tag="div"
                rules="required"
                v-slot="{ validate, errors }"
                :name="'itemName'"
                class="ValidationProvider operator"
                v-if="forceBadRerender"
              >
                <CustomSelector
                  v-model="model.operator"
                  placeholder="Оператор"
                  :options="['МТС', 'А1', 'Life']"
                  @blur="validate"
                />
                <span class="errorContainer">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <ValidationProvider
              tag="div"
              class="ValidationProvider"
              v-slot="{ errors }"
              rules="required"
              name="address"
            >
              <input
                v-model="model.serial_number"
                placeholder="Код с акционной фишки*"
                type="text"
              />

              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>

            <ValidationProvider
              tag="div"
              rules="required"
              v-slot="{ validate, errors }"
              :name="'itemName'"
              class="ValidationProvider tovar"
              v-if="forceBadRerender"
            >
              <CustomSelector
                v-model="model.item"
                placeholder="Выберите товар*"
                :maxLetters="23"
                :options="[
                  'Сухарики пшенично-ржаные «Flint» со вкусом красной икры, 110 г.',
                  'Сухарики пшенично-ржаные «Flint» краб, 110 г.',
                  'Сухарики пшенично-ржаные «Flint» со вкусом красной икры, 150 г.',
                ]"
                @blur="validate"
              />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>

            <!-- <ValidationProvider
              tag="div"
              rules="required"
              v-slot="{ validate, errors }"
              :name="'itemName'"
              class="ValidationProvider no-desktop"
              v-if="forceBadRerender"
            >
              <CustomSelector
                v-model="model.shop"
                placeholder="Выберите торговую сеть"
                :options="['Гиппо', 'Green', 'Виталюр']"
                @blur="validate"
              />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider> -->
          </div>
        </div>
        <div class="GameRegistration__RulesBlock">
          <div class="GameRegistration__messageForRequired">
            *поля, обязательные для заполнения
          </div>
          <ValidationProvider
            tag="div"
            :rules="{ required: { allowFalse: false } }"
            v-slot="{ errors }"
            name="rule1"
            class="ValidationProvider"
          >
            <div class="CustomCheckbox">
              <input type="checkbox" v-model="rule1" />
              <div
                :class="{
                  CustomCheckbox__pseudoInput: true,
                  active: rule1,
                }"
              >
                <span v-if="rule1">√</span>
                <!-- <img src="" alt="TEST" /> -->
              </div>
              <span
                >Регистрируясь, Вы подтверждаете, что изучили и согласны с
                правилами рекламной акции.</span
              >
              <span class="errorContainer">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>

        <button
          type="submit"
          class="btn"
          :disabled="!customIsValidForm || isLoadingData"
        >
          Зарегистрироваться
        </button>
      </form>
    </ValidationObserver>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated  animate__fadeInDown"
      leave-active-class="animate__animated  animate__fadeOut"
    >
      <div class="GameRegistration__modal" v-if="finishedMessage">
        <span>
          <!-- {{
            finishedMessage === "apply"
              ? "Спасибо за регистрацию, с вами свяжутся в ближайшее время"
              : "Произошла ошибка при регистрации, попробуйте позже"
          }} -->
          {{ finishedMessage }}
        </span>
        <button @click="finishedMessage = null">X</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {
  required,
  email,
  alpha,
  min,
  length,
  image,
  size,
  mimes,
  is,
  min_value,
} from "vee-validate/dist/rules";
import axios from "axios";

import CustomSelector from "../CustomSelector.vue";
import "./style.less";
import { takeDatePeriodes, periodOfNumbers } from "../../helpers";
import { postRegistration } from "../../API";

extend("required", {
  ...required,
  message: "Обязательное поле",
});
extend("email", {
  ...email,
  message: "Указан неверный адрес электронной почты",
});

extend("alpha", alpha);
extend("size", { ...size, message: "картинка имеет слишком большой вес" });
extend("min", min);
extend("min_value", {
  ...min_value,
  message: "Минимальная стоимость 1 рубль",
});
extend("is", {
  ...is,
  message: "Требуется соглашения с правилами",
});
extend("image", { ...image, message: "Требуется формат png, jpg, jpeg" });
extend("mimes", { ...mimes, message: "Требуется формат png, jpg, jpeg" });

extend("length", (value) => {
  let checkNumber = value !== null && value.trim();
  const re = /(\s*)?(\+)?\d{12}/;

  if (value !== null && re.test(checkNumber) && checkNumber.length === 13) {
    return true;
  }
  return `Номер в формате +37529XXXXXXX`;
});

extend("customRequired", (value, ...some) => {
  // if (this.model.shop !== null) {
  //   return true;
  // }
  return `Обязательное поле`;
});

export default {
  name: "GameRegistration",
  components: {
    ValidationProvider,
    ValidationObserver,
    CustomSelector,
  },
  props: {},

  data() {
    return {
      isLoadingData: false,
      finishedMessage: null,
      formErrors: [],
      inputErrors: {},
      items: [],
      rule1: false,
      forceBadRerender: true,
      model: {
        name: null,
        serial_number: null,
        surname: null,
        operator: "МТС",
        secondName: null,
        phone: null,
        item: null,
      },
    };
  },
  computed: {
    isFinishedRegistration() {
      const finishDate = new Date("2021-05-01T00:00:00");
      return finishDate < new Date();
    },
    isCorrectedPhoneNumber() {
      let checkNumber = this.model.phone !== null && this.model.phone.trim();
      const re = /(\s*)?(\+)?\d{12}/;

      return (
        this.model.phone !== null &&
        re.test(checkNumber) &&
        checkNumber.length === 13
      );
    },
    isEmailValid() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.model.email);
    },
    febrDays() {
      return periodOfNumbers(28);
    },
    isMobileSize() {
      return document.documentElement.clientWidth < 1025;
    },
    modItems() {
      return this.items.map((el) => ({ label: el.name, value: String(el.id) }));
    },
    customIsValidForm() {
      const {
        rule1,
        model: { name, serial_number, surname, operator, phone, item },
      } = this;

      return (
        rule1 &&
        name !== null &&
        operator !== null &&
        surname !== null &&
        this.isCorrectedPhoneNumber &&
        serial_number !== null &&
        phone !== null &&
        item !== null
      );
    },
  },
  methods: {
    phoneBlur() {
      if (this.model.phone === "+375") this.model.phone = "";
    },
    phoneClick() {
      if (this.model.phone === "" || this.model.phone === null)
        this.model.phone = "+375";
    },
    isNumber: function (evt, cost) {
      if (cost !== null && cost.includes(".") && evt.key === ".")
        evt.preventDefault();

      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    addItem(e) {
      e.preventDefault();
      this.model.choosedItems.push({
        name: null,
        count: "1",
        cost: null,
      });
    },
    reset() {
      this.model["name"] = null;
      this.model["surname"] = null;
      this.model["secondName"] = null;
      this.model["email"] = null;
      this.model["phone"] = null;
      this.model["shop"] = null;
      this.rule1 = false;
      this.rule2 = false;
      this.model["address"] = null;
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
    customReset() {
      // console.log(this.$refs.form);
      this.$refs.form.reset();
    },
    custom(context) {
      if (context.value === "yes") {
        return {
          on: ["input"],
        };
      }

      return { on: ["change"] };
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (files[0].type !== "image/jpeg" && files[0].type !== "image/png") {
        e.target.value = null;
        this.model.file = null;
        this.model.file_name = null;
        return;
      }

      this.model.file = files[0];
      this.model.file_name = this.sliced(this.model.file.name);
    },
    sliced(value) {
      let sliced = value.slice(0, 30);
      if (sliced.length < value.length) {
        sliced += "...";
      }
      return sliced;
    },
    async onSubmit() {
      this.isLoadingData = true;
      this.$gtag.event("registr_button", {
        event_category: "submit",
      });

      let form = new FormData();
      const {
        model: { name, surname, email, file, secondName, phone, address, shop },
      } = this;

      // choosedItems.forEach((value, index) => {
      //   form.append(`product[${index}]`, value.name);
      // });
      // choosedItems.forEach((value, index) => {
      //   form.append(`count[${index}]`, value.count);
      // });
      // choosedItems.forEach((value, index) => {
      //   form.append(`cost[${index}]`, value.cost);
      // });

      form.append("name", name);
      form.append("email", email);
      form.append("file", file);
      form.append("phone", phone);
      form.append("surname", surname);
      form.append("address", address);
      form.append("secondName", secondName);
      form.append("shop", shop);

      axios
        .post(postRegistration, form)
        .then(({ data }) => {
          this.finishedMessage = data.data.message;
          this.reset();
          this.forceBadRerender = false;
          this.isLoadingData = false;
          setTimeout(() => (this.forceBadRerender = true), 0);
        })
        .catch((error) => {
          this.isLoadingData = false;
          if (error.response) {
            this.finishedMessage = error.response.data.message;
          } else {
            this.finishedMessage = "Произошла ошибка, попробуйте позже";
          }
        });
    },
  },
  watch: {
    rule1: function () {
      // console.log(this.model);
      // console.log(this.customIsValidForm);
    },
  },
  mounted() {
    // axios.post(getGoods).then(({ data }) => (this.items = [...data.data]));
  },
};
</script>
