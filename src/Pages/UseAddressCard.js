import { useState } from "react";
import { Link } from "react-router-dom";

const UserAddressCard=({productitem})=>{
const [editAndDelete,setEditAndDelete]=useState(false);
 console.log(productitem);
    return(
        <>
         <div className="address-block">
            <div className="heading-wrap">
                <div className="wrap-icon home"><i className="icon-home"></i></div>
                <h4>Home Address</h4>
            </div>
            <div className="card address-card" >
            <div className="country-wrap"><label className="address-label">Country:</label><span
                    className="address-info">{productitem?.countryName}</span></div>
            <div className="city-wrap"><label className="address-label">City:</label><span
                    className="address-info">{productitem?.cityName}</span></div>
            <div className="state-wrap"><label className="address-label">State:</label><span
                    className="address-info not-applicable">{productitem?.stateName}</span></div>
            <div className="address-wrap"><label className="address-label">Address:</label><span
                    className="address-info text-transform-initial" style={{paddingLeft: "0px"}}>{productitem?.addressLine1}{productitem?.addressLine2}</span></div>
           
           
            <div className="more-wrap">
                <div className="menu-wrap">
                <button className="menu-btn" onClick={()=>setEditAndDelete(x=>!x)}>
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
                <span className="btn-dot"></span>
                </button>
                </div>
            </div>
          
        </div>
      
            {
                                editAndDelete
                                    ?
                                    <div className="menu">
                                        <ul className="menu-items">
                                            <li>
                                                <button className="menu-option" ><Link to={"/user/my-addresses/edit" + '/' + `${productitem._id}`}>Edit</Link></button>
                                            </li>
                                            <li>
                                                <button className="menu-option delete">Delete</button>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    null
                            } 


        </div>
        </>
    );
}
export default UserAddressCard;

