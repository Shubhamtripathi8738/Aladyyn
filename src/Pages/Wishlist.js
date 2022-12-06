import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishlistAction } from "../Store/Action";

const Wishlist=()=>{
const dispatch=useDispatch();

const userProfileData=useSelector((state)=>state.wishlistReducer?.productData)

useEffect(()=>{
    wishlistAction(dispatch)
},[])
console.log(userProfileData);
    return(
        <>
        <div>Wishlist Page</div>
        <section className="sub-category-block search-section wishlist-section">
    <div className="">
        <div className="Toastify"></div>
    </div>
    <div className="container">
        <div className="right-block">
            <h1>Wishlist</h1>

           {userProfileData?
           userProfileData.map((value,index)=>{
            return(
                <>
                 <div className="wishList-Box" style={{display: "flex", flexWrap: "wrap"}}>
                    {value.data}
           </div>
                </>
            )
           }):<div>No wishlist</div>
          
        }
            


        </div>
    </div>
</section>
        </>
    );
}
export default Wishlist;