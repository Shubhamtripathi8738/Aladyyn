import {GET_STATE_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const stateDataReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_STATE_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
