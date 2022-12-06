import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { cityDataAction, stateDataAction } from "../Store/Action";
const Freelancer=()=>{

    const countryData=useSelector((state)=>state.countryDataReducer?.productData)
  const stateData = useSelector((state) => state.stateDataReducer?.productData);

  const [countryName,setCountryName]=useState("");
  const dispatch=useDispatch();


    const SignupSchema = yup.object().shape({
        firstName: yup.string().required(),
        Email: yup.string().email(),
        lastName:yup.string().required(),
        phoneNumber:yup.number().required(),
        issues:yup.string().required(),
        password:yup.string().required(),
        comment:yup.string().required(),
        confirmpassword:yup.string().required().oneOf([yup.ref("password")], "Passwords do not match"),
        dob:yup.number().required(),
        address1:yup.string().required(),
        country:yup.string().required(),
        postalcode:yup.string().required()
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(SignupSchema),
      });

     const onSubmit=(e)=>{
   console.log(e);
     }
console.log(countryData);

const stateDataFunction = (e) => {
    let data = e.target.value;
    setCountryName(data);
    stateDataAction(dispatch, data);
  };


const cityDataFunction=(e)=>{
let data={
    countryId:countryName,
    stateId:e.target.value
}
cityDataAction(dispatch,data)
}

return(
    <>


                    <div className="freelancer-tab">
                        <div className="Toastify"></div>

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="card inputs-wrapper">
                                <h4>Verification</h4>
                                <div className="row input-block">

                                    <div className="col-md-6 col-lg-4 input-wrapper required">
                                        <label  className="input-label">first name</label>
                                        <div className="input-wrap">
                                            <input type="text" className="form-control" placeholder="FirstName" {...register("firstName")} 
                                            />
                                            {errors.firstName &&(
                                                <p>
                                                    {errors.firstName.message}
                                                </p>
                                            )}
                                            </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 input-wrapper required">
                                        <label className="input-label">Last name</label>
                                        <div className="input-wrap">
                                            <input type="text" className="form-control"
                                                placeholder="LastName" {...register("lastName")}
                                                />
                                                {errors.lastName && (
                                                    <p>
                                                        {errors.lastName.message}
                                                    </p>
                                                )}
                                                </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 input-wrapper required">
                                        <label className="input-label">Email address</label>
                                        <div className="input-wrap">
                                            <input type="email" className="form-control"  placeholder="example@aladyyn.pro" {...register("email")} 
                                            />
                                            {errors.email&&(
                                                <p>
                                                    {errors.email.message}
                                                </p>
                                            )}
                                                </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 input-wrapper required">
                                        <label  className="input-label">Password</label>
                                        <div className="input-wrap password">
                                            <input type="password" name="password" className="form-control" placeholder="*********" {...register("password")}
                                            />
                                            {errors.password &&(
                                                <p>
                                                    {errors.password.message}
                                                </p>
                                            )}
                                            <div className="toggle-password"><i className="icon-eye"></i></div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 input-wrapper required">
                                        <label className="input-label">Confirm Password</label>
                                        <div className="input-wrap password">
                                            <input type="password" className="form-control" placeholder="**********" {...register("confirmpassword")}
                                            />
                                            {errors.confirmpassword && (
                                                <p>
                                                    {errors.confirmpassword.message}
                                                </p>
                                            )}
                                            <div className="toggle-password"><i className="icon-eye"></i></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="inputs-heading">Freelancer Information</div>
                                <div className="row input-block">
                                    <div className="col-md-6 col-lg-4 input-wrapper required text-fix">
                                        <label className="input-label">Date of Birth</label>
                                        <div className="input-wrap">
                                            <input type="date" className="form-control date-input" placeholder="Select date" {...register("dob")}
                                            />
                                            {errors.dob &&(
                                                <p>
                                                    {errors.dob.message}
                                                </p>
                                            )}
                                            </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="input-wrapper required">
                                            <label className="input-label">Phone Number</label>
                                            <div className="input-wrap">
                                                <input type="number" className="form-control" placeholder="Mobile" {...register("phonenumber")}
                                                />
                                                {errors.phonenumber&&(
                                                    <p>
                                                        {errors.phonenumber.message}
                                                    </p>
                                                )}
                                                </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="input-wrapper img-input-fix has-input-file">
                                    <label className="">Proof of Identify</label>
                                    <div className="row input-block">
                                        <div className="col-lg-8 input-wrapper">
                                            <div className="img-input-wrapper">
                                                <div className="img-input"><i className="icon-plus"></i>Upload<input
                                                        name="proofOfIdentity" type="file" accept="image/*"/>
                                                        </div>
                                                        <span className="img-info">Upload scanned copy of passport, nationalID,
                                                    driver’s license etc.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inputs-heading">Business Address</div>
                                <div className="row input-block">

                                    <div className="col-md-6 input-wrapper required"><label className="input-label">address line
                                            1</label>
                                        <div className="input-wrap"><input type="text" className="form-control"
                                                 placeholder="Address" {...register("address1")}
                                                 />
                                                 {errors.address1&&(
                                                    <p>
                                                        {errors.address1.message}
                                                    </p>
                                                 )}
                                                 <span
                                                className="input-info">Building number and Street</span></div>
                                    </div>

                                    <div className="col-md-6 input-wrapper"><label className="input-label">address line
                                            2</label>
                                        <div className="input-wrap">
                                            <input type="text"
                                                className="form-control" placeholder="Address" {...register("address2")}
                                                />
                                                {errors.address2&&(
                                                    <p>
                                                        {errors.address2.message}
                                                    </p>
                                                )}
                                                <span
                                                className="input-info">Room/Block/Apartments</span></div>
                                    </div>

                                    <div className="col-md-6 input-wrapper required"><label
                                            className="input-label">Country</label>
                                        <div className="input-wrap">
                                            <select name="countryId" className="form-control" {...register("country")}
                    onChange={stateDataFunction}

                                            >
                                                <option value="">Please select country</option>
                                                {countryData&&countryData?.data?.map((item,index)=>{
                                                    return(
                                                          <option key={index} value={item?._id}>{item?.name}</option>
                                                    )
                                                })}
                                              
                                            </select>
                                            {errors.country&&(
                                                <p>
                                                    {errors.country.message}
                                                </p>
                                            )}
                                            </div>
                                    </div>

                                    <div className="col-md-6 input-wrapper required">
                <label className="input-label required">State / Region</label>
                <div className="input-wrap">
                  <select className="form-control" name="stateId"
                  {...register("state")}
                  onChange={cityDataFunction}
                  >
                    <option value="">Please select state</option>
                    {stateData && stateData?.data?.map((item,index)=>{
                        return(
                            <option key={index} value={item?._id}>
                            {item?.name}
                          </option>
                        )
                    })} 
                  </select>
                  {errors.state && <p>{errors.state.message}</p>}
                </div>
              </div>

                                    <div className="col-md-6 input-wrapper">
                                        <label className="input-label">City</label>
                                        <div className="input-wrap">
                                            <select className="form-control" name="cityId" {...register("city")} >
                                                <option value="">Please select city</option>
                                            </select>
                                            {errors.city&&(
                                                <p>
                                                    {errors.city.message}
                                                </p>
                                            )}
                                            </div>
                                    </div>

                                    <div className="col-md-6 input-wrapper required">
                                        <label className="input-label">ZIP / Postal
                                            Code</label>
                                        <div className="input-wrap">
                                            <input type="text" name="postcode" className="form-control"
                                                placeholder="Zip Code" {...register("postalcode")} 
                                                />
                                                {errors.postalcode&&(
                                                    <p>
                                                        {errors.postalcode.message}
                                                    </p>
                                                )}
                                                </div>
                                    </div>

                                </div>
                                <div className="row input-block">
                                    <div className="col-12 input-wrapper required mb-0"><label
                                            className="input-label">Comment</label>
                                        <div className="input-wrap">
                                            <textarea type="text" className="form-control"
                                                name="comment" placeholder="Please enter your comment" {...register("comment")} >
                                                    </textarea>
                                                    {errors.comment&&(
                                                        <p>
                                                            {errors.comment.message}
                                                        </p>
                                                    )}
                                                    </div>
                                        <label className="comment-info input-label input-info position-static">Comment
                                            should not exceed 300 characters.</label>
                                    </div>
                                </div>
                                <div className="form-check"><input type="checkbox" name="privacyPolicy"
                                        className="form-check-input"/><label 
                                        className="form-check-label">Please accept our<a className="term-conditions"
                                            href="/terms-and-conditions" target="_blank">terms and
                                            conditions</a></label>
                                    <div className="invalid-feedback"></div>
                                </div>
                            </div>
                            <div className="btn-wrap">
                                <input className="btn" type="submit"/>
                                </div>
                        </form>
                    </div>
                
            
    </>
);
}
export default Freelancer;