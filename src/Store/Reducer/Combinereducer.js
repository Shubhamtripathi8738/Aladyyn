import { combineReducers } from "redux";
import { cartDataReducer } from "./CartDataReducer";
import { categoryDataReducer} from "./CategoryDataReducer";
import { cityDataReducer } from "./CityDataReducer";
import { contactDataReducer} from "./ContactDataReducer";
import { countryDataReducer} from "./CountryDataReducer";
import { homePageDataReducer} from "./HomePageDataReducer";
import { loginReducer} from "./LoginReducer";
import { notificationReducer } from "./NotificationReducer";
import { sellerSignupFormReducer} from "./SellerSignupFormReducer";
import { signupReducer } from "./SignUpReducer";
import { stateDataReducer} from "./StateDataReducer";
import { userAddressReducer } from "./UserAddressReducer";
import { userDetailAddressReducer } from "./UserDetailAddressReducer";
import { userProfileReducer} from "./UserProfileReducer";
import { wishlistReducer } from "./WishlistReducer";

const reducer=combineReducers({
    homePageDataReducer:homePageDataReducer,
    categoryDataReducer:categoryDataReducer,
    countryDataReducer:countryDataReducer,
    contactDataReducer:contactDataReducer,
    stateDataReducer:stateDataReducer,
    cityDataReducer:cityDataReducer,
    sellerSignupFormReducer:sellerSignupFormReducer,
    loginReducer:loginReducer,
    signupReducer:signupReducer,
    userProfileReducer:userProfileReducer,
    userAddressReducer:userAddressReducer,
    wishlistReducer:wishlistReducer,
    notificationReducer:notificationReducer,
    cartDataReducer:cartDataReducer,
    userDetailAddressReducer:userDetailAddressReducer
})
export default reducer;