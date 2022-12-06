import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { userAddressAction, userDetailAddressAction } from "../Store/Action";

const EditUserAddress=()=>{
    const {userAddressId}=useParams();
    console.log(userAddressId);

const dispatch=useDispatch();
useEffect(()=>{
    userAddressAction(dispatch)
},[dispatch])

const userEditAddressData=useSelector((state)=>state.userAddressReducer?.productData)
console.log(userEditAddressData);

   useEffect(()=>{
   const data={addressId:userAddressId}
    userDetailAddressAction(dispatch,data)
   },[])

    return(
        <>
        <section className="my-addresses add">
    <div className="Toastify"></div>
    <form>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a>User Account</a></li>
                    <li className="breadcrumb-item"><a>My Adresses</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Adresses</li>
                </ol>
            </nav>
            <h1>Edit Address</h1>
            <div className="address-block">
                <div className="card address-card inputs-wrapper">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="radio-btn form-check form-check-inline"><input type="radio" id="credit-input"
                                    className="form-check-input" name="addressType" /><label title=""
                                     className="form-check-label">Home Address</label></div>
                            <div className="radio-btn form-check form-check-inline"><input type="radio" id="credit-input"
                                    className="form-check-input" name="addressType" /><label title=""
                                     className="form-check-label">Office Address</label></div>
                            <div className="radio-btn form-check form-check-inline"><input type="radio" id="credit-input"
                                    className="form-check-input" name="addressType" /><label title=""
                                     className="form-check-label">Other</label></div>
                        </div>
                    </div>
                    <div className="row input-block">

                        <div className="col-md-6 input-wrapper required">
                            <label className="input-label">Address Line 1</label>
                            <div className="input-wrap ">
                                <input type="text" className="form-control" placeholder="Address" name="addressLine1"/>
                                    </div>
                        </div>

                        <div className="col-md-6 input-wrapper">
                            <label className="input-label">Address Line 2</label>
                            <div className="input-wrap ">
                            <input type="text" className="form-control" placeholder="Address" name="addressLine2"/>
                                     </div>
                        </div>

                        <div className="col-md-6 input-wrapper required">
                            <label className="input-label">Country</label>
                            <select className="form-control" name="countryId">
                                <option value="" name="countryId"></option>
                                <option value="61c2fb83dc7c0d455ba5e627">Afghanistan</option>
                            </select>
                            </div>

                        <div className="col-md-6 input-wrapper required">
                            <label className="input-label">State</label>
                            <select className="form-control" name="stateId">
                                <option value="">Select state</option>
                                <option value="61c42e173dcee46c2a8e46cb">Andaman and Nicobar Islands</option>
                                <option value="61c42e173dcee46c2a8e46cc">Andhra Pradesh</option>
                            </select>
                        </div>

                        <div className="col-md-6 input-wrapper"><label className="input-label">City</label><select
                                className="form-control" name="cityId">
                                <option value="">Select city</option>
                                <option value="61d57561f6d66b40272bee27">Ambala</option>
                                
                               
                            </select>
                            </div>

                        <div className="col-md-6 input-wrapper required">
                        <label className="input-label">Zip/Postal Code</label>
                            <div className="input-wrap ">
                            <input type="text" className="form-control" placeholder="Zip"
                                    name="postcode" />
                                    </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="btns-wrap"><a className="secondary-btn" type="button" href="/user/my-addresses">Cancel</a><button
                    className="btn" type="submit">Submit</button></div>
        </div>
    </form>
</section>
        </>
    );
}
export default EditUserAddress;