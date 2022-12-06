import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userPofileAction } from "../Store/Action";

const UserProfile=()=>{


const userProfileData=useSelector((state)=>state.userProfileReducer?.productData)

const dispatch=useDispatch();
useEffect(()=>{
    userPofileAction(dispatch)
},[])

console.log(userProfileData);
    return(
        <>
        <section className="user-profile">
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a role="button" >User Account</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
        </nav>
        <div className="section-head">
            <div className="heading-wrap">
                <h1>User Profile</h1>
            </div>
            <div className="btn-wrap">
                <Link to='/user/profile/edit'>Edit</Link>
            </div>
        </div>
        <div className="account-info">
            {userProfileData?.map((value,index)=>{
                return(
                    <div className="card account-card" key={index}>
                    <div className="account-heading">Account Information</div>
                    <span className="info-label">First Name:</span>
                    <span className="info-wrap">{value?.firstName}</span>
                    <span className="info-label">Last Name:</span>
                    <span className="info-wrap">{value?.lastName}</span>
                    <span className="info-label">Email:</span>
                    <span className="info-wrap">{value?.email}</span>
                    <span className="info-label">Mobile:</span>
                    <span className="info-wrap">{value?.phone}</span>
                </div>
              
              
                )
            })}
           <div className="card account-card">
                    <div className="account-heading">Basic Information</div>
                    <div className="profile-img">
                        <div className="img-wrap">
                        </div>
                    </div>
                </div>
        </div>
    </div>
</section>
        </>
    );
}
export default UserProfile;