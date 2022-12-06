import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logoAladyyn from "../assets/images/aladyyn-new.png";
import { categoryDataAction,countryDataAction, userPofileAction } from "../Store/Action";



const Header=()=>{
    const [categoryState,setCategoryState]=useState(false);
    const [countryState,setCountryState]=useState(false);
    const [userDetails, setUserDetails] = useState(false)


const dispatch=useDispatch();
const navigate=useNavigate();
useEffect(()=>{
    categoryDataAction(dispatch);
    countryDataAction(dispatch);
},[dispatch])
console.log("first")

const countryData=useSelector((state)=>state.countryDataReducer?.productData)
const categoryData = useSelector((state) => state.categoryDataReducer?.productData);



const categoryOpen=()=>{
setCategoryState(!categoryState);

}

const countryOpen=()=>{
    setCountryState(!countryState);
}

const userMenuBarHeader=()=>{
    setUserDetails(x => !x)
}

const userDetailsMenuBar=()=>{
    setUserDetails(false);
}

const logOutForm=()=>{
    localStorage.removeItem("loginData")
    navigate('/');
}

const UserProfile=useSelector((state)=>state.userProfileReducer?.productData)


useEffect(()=>{
    userPofileAction(dispatch)
},[])

const localData=localStorage.getItem("token");


    return(
        <>
	<header className="header logged-in">
    <div className="primary-header">
        <div className="container">
            <div className="logo">
                <Link to="/">
               <img src={logoAladyyn} alt="logo"/>
               </Link>
            </div>
            <div className="search-wrapper" style={{position: "relative"}}>
                <form>
                    <div className="input-wrap"><input type="text" className="form-control" placeholder="Search" 
                            name="searchBar"/>
                        <div className="btn-wrap"><button type="submit" className="btn"><i className="icon-search"></i></button>
                        </div>
                    </div>
                </form>
                <div>
                    <div
                        style={{height: "200px", backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(211, 211, 211)", width: "100%", position: "absolute", zindex: "9999", display: "none", overflow: "auto"}}>
                    </div>
                </div>
            </div>
            <div className="header-right">
                   <Link to="/user/cart">
                    <div className="cart-wrap"><i className="icon-cart"></i>
                        <div className="item-counter">0</div>
                    </div>
                    </Link>
                <Link to="/user/message">
                    <div className="notification-wrap"><i className="icon-mail"></i>
                        <div className="item-counter">0</div>
                    </div>
                    </Link>

                    {
                                localStorage.getItem("token")
                                    ?


                                    <div className="profile-dropdown">
                                        <div className="show dropdown">
                                            <button aria-expanded="true"
                                                type="button"
                                                className="dropdown-toggle btn btn-primary"
                                                onClick={userMenuBarHeader}                                         
                                            >{UserProfile?.[0]?.firstName}
                                            </button>
                                            {
                                                userDetails ? <div x-placement="bottom-end" aria-labelledby="" className="dropdown-menu show dropdown-menu-end"
                                                    data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-end"
                                                    style={{
                                                        position: "absolute",
                                                        inset: "0px 0px auto auto",
                                                        transform: "translate(0px, 42px)"
                                                    }}>
                                                    <Link to={'/user/dashboard'}
                                                        data-rr-ui-dropdown-item=""
                                                        className="dropdown-item"                                                 
                                                        onClick={userDetailsMenuBar}
                                                    >
                                                        Your Account
                                                    </Link>

                                                    <Link to={"/Notification"} 
                                                        data-rr-ui-dropdown-item=""
                                                        className="dropdown-item"                                                     
                                                        onClick={userDetailsMenuBar}
                                                    >Notifications</Link>

                                                    <Link to={"/wishlist"}
                                                        data-rr-ui-dropdown-item=""
                                                        className="dropdown-item"
                                                        onClick={userDetailsMenuBar}
                                                    >My Wishlist</Link>

                                                    <a href="#"
                                                        data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabIndex="0"
                                                        onClick={logOutForm}>Sign Out</a></div>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                    :
                                    <div className="signin-btn">
                                        <Link to={'/sign-in'} className="btn">Sign In</Link>
                                    </div>
                            }

           
              
            
            
            </div>
        </div>
    </div>

    <div className="secondary-header">
        <div className="container">
            <div className="header-left">
                <button type="button" className="menu-btn" onClick={categoryOpen}>
                    <div className="ham-burger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    <div className="text-wrap">All Categories</div>
                   
                </button>
                </div>
            <nav className="nav">
                <ul className="w-100">
                    <li><Link to="/customer-service">Customer Services</Link></li>
                    <li><Link to="/best-seller">Best Sellers </Link></li>
                    <li><Link to="/become_a_seller">Become a Seller</Link></li>
                </ul>
            </nav>
            <div className="country-select" onClick={countryOpen}>
                <div className="custom-select">
                    <div className="custom-select_header">
                        <i className="icon-location"></i>
                        <i className="icon-down "></i>
                        {countryState&& 
                        <div>
                        {countryState?.data?.map((value,index)=>{
                            return(
                                <div key={index}>
                                <div>{value?.name}</div>
                                </div>
                            )
                        })}
                        </div>
                        }
                        </div>
                </div>
            </div>
        </div>
    </div>
    {categoryState && 
                    <div>
                        {categoryData?.data?.map((value,index)=>{
                            return(
                                <>
                                <div>{value?.name}</div>
                                </>
                            );
                        })}
                    </div> }
</header>
        </>
    );
}
export default Header;







