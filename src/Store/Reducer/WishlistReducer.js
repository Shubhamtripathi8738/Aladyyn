import {GET_WISHLIST} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_WISHLIST:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};