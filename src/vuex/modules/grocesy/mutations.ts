import { MutationTree } from "vuex";
import { IGroceryState } from "./interface";

const mutation: MutationTree<IGroceryState> = {
  addNewGrocery({ grocesryData }, newGrocery: string) {
    grocesryData.groceries = [...grocesryData.groceries, newGrocery];
  },
};

export default mutation;
