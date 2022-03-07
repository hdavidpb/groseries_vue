import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import groceryModule from "./modules/grocesy";
import { IGroceryState } from "./modules/grocesy/interface";

export interface StateInterface {
  groceryModule: IGroceryState;
}
export const key: InjectionKey<Store<StateInterface>> = Symbol();

export const store = createStore<StateInterface>({
  modules: {
    groceryModule: groceryModule,
  },
});
