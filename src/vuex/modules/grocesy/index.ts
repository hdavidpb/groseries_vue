import { Module } from "vuex";
import { StateInterface } from "../../store";

import { IGroceryState } from "./interface";

import { state } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const groceryModule: Module<IGroceryState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default groceryModule;
