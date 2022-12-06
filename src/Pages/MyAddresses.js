import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userAddressAction } from "../Store/Action";
import UserAddressCard from "./UseAddressCard";

const MyAddresses=()=>{


const dispatch=useDispatch();
useEffect(()=>{
    userAddressAction(dispatch)
},[])

const userAddressData=useSelector((state)=>state.userAddressReducer?.productData)
console.log(userAddressData);

    return(
        <>
        <section className="my-addresses">
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">User Account</li>
                <li className="breadcrumb-item active" aria-current="page">My Adresses</li>
            </ol>
        </nav>
        <div className="section-head">
            <div className="heading-wrap">
                <h1>My Adresses</h1>
            </div>
            <div className="btn-wrap"><Link to="/user/my-addresses/add" className="btn">Add New Address</Link></div>
        </div>
       {userAddressData? 
       userAddressData.map((value,index)=>{
        return(
            <>
            <UserAddressCard productitem={value} key={index} />
            </>
        );
       })
    :null}
    </div>
</section>
        </>
    );
}
export default MyAddresses;