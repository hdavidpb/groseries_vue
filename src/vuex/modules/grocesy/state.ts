import { IGroceryState } from "./interface";

export const state = (): IGroceryState => {
  return {
    grocesryData: {
      groceries: [],
    },
  };
};
