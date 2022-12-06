import {GET_HOME_PAGE_DATA, GET_LOGIN_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_LOGIN_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
