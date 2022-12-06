import {GET_HOME_PAGE_DATA} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_HOME_PAGE_DATA:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
