import {GET_USER_PROFILE} from "../Action/ActionType";




const initialState = {
  loading: false,
  error: null,
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case  GET_USER_PROFILE:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
