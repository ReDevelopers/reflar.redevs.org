import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueLazyload from "vue-lazyload";
import Icon from "vue-awesome/components/Icon.vue";
import "./icons";

Vue.use(VueLazyload);
Vue.component("icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
