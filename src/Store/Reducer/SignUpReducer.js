import {GET_SIGN_UP} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_SIGN_UP:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};