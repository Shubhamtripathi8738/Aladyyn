import {GET_CATEGORY_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const categoryDataReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_CATEGORY_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
