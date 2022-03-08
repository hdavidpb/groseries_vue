import { createApp, watchEffect } from "vue";

import App from "./App.vue";
import { store } from "./vuex/store";

watchEffect(() => {
  store.commit("groceryModule/addSavedToState");
});

createApp(App).use(store).mount("#app");
