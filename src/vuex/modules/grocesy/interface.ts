export interface IGroceryState {
  grocesryData: {
    groceries: IGroceries[];
    savedList: ISavedList[];
  };
}

export interface IGroceries {
  name: string;
  checked: boolean;
}

export interface ISavedList {
  date: string;
  dataList: IGroceries[];
}
