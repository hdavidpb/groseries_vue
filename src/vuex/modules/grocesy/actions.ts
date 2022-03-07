import { ActionTree } from "vuex";

import { StateInterface } from "../../store";
import { IGroceryState } from "./interface";

const actions: ActionTree<IGroceryState, StateInterface> = {
  changeMsg({ state }) {},
};

export default actions;
