import {GET_CITY_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const cityDataReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_CITY_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
