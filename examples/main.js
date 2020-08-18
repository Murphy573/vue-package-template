import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MryUI from "../packages/index";

Vue.use(MryUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
