import {GET_SELLER_SIGNUP_FORM} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const sellerSignupFormReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_SELLER_SIGNUP_FORM:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
