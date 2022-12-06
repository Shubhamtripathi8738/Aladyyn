
import { api } from "../../Api/api";
import { GETCARTDATA, GETCATEGORYDATA, GETCITY, GETCONTACT, GETCOUNTRY, GETHOMEPAGEDATA, GETLOGIN, GETNOTIFICATION, GETSELLERSIGNUPFORM, GETSTATE, GETWISHLIST, USERDETAILADDRESS, USERLISTADDRESS, USERPROFILE, USERSIGNUP } from "../../Api/endpoints";
import { GET_CART_DATA, GET_CATEGORY_DATA, GET_CITY_DATA, GET_CONTACT_DATA, GET_COUNTRTY_DATA, GET_HOME_PAGE_DATA, GET_LOGIN_DATA, GET_NOTIFICATION, GET_SELLER_SIGNUP_FORM, GET_SIGN_UP, GET_STATE_DATA, GET_USER_ADDRESS, GET_USER_DETAIL_ADDRESS, GET_USER_PROFILE, GET_WISHLIST } from "./ActionType";

export const homepageDataAction=(dispatch)=>{
    api.get(GETHOMEPAGEDATA).then(response=>{
      dispatch({type:GET_HOME_PAGE_DATA,payload:response.data})
    })
  }

export const categoryDataAction=(dispatch)=>{
    api.get(GETCATEGORYDATA).then(response=>{
      dispatch({type:GET_CATEGORY_DATA,payload:response.data})
    })
}

export const userPofileAction=(dispatch)=>{
  api.get(USERPROFILE).then(response=>{
    dispatch({type:GET_USER_PROFILE,payload:response.data.data})
  })
  }
  

export const countryDataAction=(dispatch)=>{
  api.get(GETCOUNTRY).then(response=>{
    dispatch({type:GET_COUNTRTY_DATA,payload:response.data})
  })
}

export const contactDataAction=(navigate,dispatch,data)=>{
  api.post(GETCONTACT,data).then(response=>{
    dispatch({type:GET_CONTACT_DATA,payload:response.data})
    if (response.data) {
      navigate("/");
    }
  })
}

export const stateDataAction=(dispatch,data)=>{
  api.post(GETSTATE,{countryId:data}).then(response=>{
    dispatch({type:GET_STATE_DATA,payload:response.data})
  })
}

export const cityDataAction=(dispatch,data)=>{
  api.post(GETCITY,data).then(response=>{
    dispatch({type:GET_CITY_DATA,payload:response.data})
  })
}

export const sellerSignUpForm=(dispatch,data)=>{
  api.post(GETSELLERSIGNUPFORM,data).then(response=>{
    dispatch({type:GET_SELLER_SIGNUP_FORM,payload:response.data})
  })
}

export const loginAction=(dispatch,data,navigate)=>{
  api.post(GETLOGIN,data).then(response=>{
    localStorage.setItem("token",response.data.data.token)
    dispatch({type:GET_LOGIN_DATA,payload:response.data})
    navigate("/")
  })
}

export const signUpAction=(navigate,dispatch,data,notify)=>{
  api.post(USERSIGNUP,data).then(response=>{
    dispatch({type:GET_SIGN_UP,payload:response.data})
    if(response.data.status==="success"){
      navigate("/");
    }else{
   notify();
    }
  })
}

export const userAddressAction=(dispatch)=>{
  api.get(USERLISTADDRESS).then(response=>{
    dispatch({type:GET_USER_ADDRESS,payload:response.data.data})
  })
}

export const wishlistAction=(dispatch)=>{
  api.get(GETWISHLIST).then(response=>{
    dispatch({type:GET_WISHLIST,payload:response.data.data})
  })
}

export const notificationAction=(dispatch)=>{
  api.get(GETNOTIFICATION).then(response=>{
    dispatch({type:GET_NOTIFICATION,payload:response.data})
  })
}

export const cartAction=(dispatch)=>{
  api.get(GETCARTDATA).then(response=>{
    dispatch({type:GET_CART_DATA,payload:response.data})
  })
}

export const userDetailAddressAction=(dispatch,data)=>{
  api.post(USERDETAILADDRESS,data).then(response=>{
    dispatch({type:GET_USER_DETAIL_ADDRESS,payload:response.data})
  })
}
