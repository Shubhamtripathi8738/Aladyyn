import {GET_COUNTRTY_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const countryDataReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_COUNTRTY_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
