import * as types from "../constants/actionsTypes";

const initialState = {
  keyWord: "",
  id: "",
  holder: ""
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SEARCH_NAME:
      state.keyWord = action.keyWord;
      state.id = "search_name";
      state.holder = "Tìm theo tên";
      return { ...state };

    case types.SEARCH_ID:
      state.keyWord = action.keyWord;
      state.id = "search_barcode";
      state.holder = "Tìm theo barcode";
      return { ...state };

    default:
      return state;
  }
};

export default searchReducer;
