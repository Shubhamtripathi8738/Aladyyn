import {GET_CART_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const cartDataReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_CART_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
