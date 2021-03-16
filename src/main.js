import Vue from "vue";
import App from "./App.vue";

import VueLazyload from "vue-lazyload";
// import VueSplide from "@splidejs/vue-splide"; //Вызывает поломку в ie11
import VueScrollTo from "vue-scrollto";
import VueWaypoint from "vue-waypoint";
import vco from "v-click-outside";
import VueScreenSize from "vue-screen-size";



Vue.config.productionTip = false;

// Vue.use(VueSplide);
Vue.use(vco);
Vue.use(VueScrollTo);
Vue.use(VueWaypoint);
Vue.use(VueLazyload);
Vue.use(VueScreenSize);

Vue.prototype.$desktopSize = 1025;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
