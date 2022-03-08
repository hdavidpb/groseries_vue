import { GetterTree } from "vuex";
import { StateInterface } from "../../store";
import { IGroceryState } from "./interface";

const getters: GetterTree<IGroceryState, StateInterface> = {
  saveList({ grocesryData }) {},
};

export default getters;
