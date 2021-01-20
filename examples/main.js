import Vue from "vue";
import App from "./App.vue";

import PandaEditor from "../packages/index";

Vue.use(PandaEditor);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
