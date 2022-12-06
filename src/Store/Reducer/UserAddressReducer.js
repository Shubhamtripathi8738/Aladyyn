import {GET_USER_ADDRESS} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const userAddressReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_USER_ADDRESS:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
