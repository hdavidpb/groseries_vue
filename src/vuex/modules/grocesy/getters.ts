import { GetterTree } from "vuex";
import { StateInterface } from "../../store";
import { IGroceryState } from "./interface";

const getters: GetterTree<IGroceryState, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
