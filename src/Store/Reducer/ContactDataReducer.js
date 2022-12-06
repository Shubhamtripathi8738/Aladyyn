import {GET_CATEGORY_DATA, GET_CONTACT_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const contactDataReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_CONTACT_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
