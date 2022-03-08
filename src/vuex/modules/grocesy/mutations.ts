import { MutationTree } from "vuex";
import { IGroceries, IGroceryState, ISavedList } from "./interface";

const mutation: MutationTree<IGroceryState> = {
  addNewGrocery({ grocesryData }, newGrocery: IGroceries) {
    grocesryData.groceries = [...grocesryData.groceries, newGrocery];
  },
  addSavedToState({ grocesryData }) {
    grocesryData.savedList = !!localStorage.getItem("saved-list")
      ? JSON.parse(localStorage.getItem("saved-list")!)
      : [];
  },
  saveList({ grocesryData }, newList: ISavedList) {
    grocesryData.savedList = [...grocesryData.savedList, newList];
  },
};

export default mutation;
