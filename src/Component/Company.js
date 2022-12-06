import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { cityDataAction,sellerSignUpForm, stateDataAction } from "../Store/Action";



const Company = () => {
  const dispatch = useDispatch();
  const [countryName,setCountryName]=useState("");


  const countryData = useSelector((state) => state.countryDataReducer?.productData);
  const stateData = useSelector((state) => state.stateDataReducer?.productData);
  const cityData=useSelector((state)=>state.cityDataReducer.productData);



  const SignupSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required field"),
    Email: yup.string().email(),
    lastName: yup.string().required(),
    // phoneNumber: yup.number().required(),
    issues: yup.string().required(),
    email: yup.string().required(),
    comment: yup.string().min(10).required(),
    password: yup.string().required(),
    confirmpassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords do not match"),
    businessname: yup.string().required(),
    primarycontactperson: yup.string().required(),
    companyregistrationnumber: yup.string().required(),
    vat: yup.string().required(),
    addressline1: yup.string().required(),
    country: yup.string().required(),
    postalcode: yup.string().required(),
    state:yup.string().required()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("first")
  
    sellerSignUpForm(dispatch,e)
  };
 
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

  return (
    <>
      <div className="company-tab">
        <div className="Toastify"></div>

        <form>
          <div className="card inputs-wrapper">
            <h4>Verification</h4>
            <div className="row input-block">
              <div className="col-md-6 col-lg-4 input-wrapper required">
                <label className="input-label required required">
                  first name
                </label>
                <div className="input-wrap ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FirstName"
                    {...register("firstName")}
                  />
                  {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
              </div>

              <div className="col-md-6 col-lg-4 input-wrapper required">
                <label className="input-label required">Last name</label>
                <div className="input-wrap ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LastName"
                    {...register("lastName")}
                  />
                  {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="col-md-6 col-lg-4 input-wrapper required">
                <label className="input-label required">Email address</label>
                <div className="input-wrap ">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@aladyyn.pro"
                    {...register("email")}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
              </div>

              <div className="col-md-6 col-lg-4 input-wrapper required">
                <label className="input-label required">Password</label>
                <div className="input-wrap password">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="**********"
                    {...register("password")}
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                  <div className="toggle-password">
                    <i className="icon-eye"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 input-wrapper required">
                <label className="input-label required">Confirm Password</label>
                <div className="input-wrap password">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="************"
                    {...register("confirmpassword")}
                  />
                  {errors.confirmpassword && (
                    <p>{errors.confirmpassword.message}</p>
                  )}
                  <div className="toggle-password">
                    <i className="icon-eye"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="inputs-heading">Business Information</div>
            <div className="row input-block margin-fix">
              <div className="col-md-6 col-lg-4 input-wrapper required">
                <label className="input-label required">Business Name</label>
                <div className="input-wrap ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Business Name"
                    {...register("businessname")}
                  />
                  {errors.businessname && <p>{errors.businessname.message}</p>}
                </div>
              </div>

              <div className="col-md-6 col-lg-4 input-wrapper required">
                <label className="input-label required">
                  Primary Contact Person
                </label>
                <div className="input-wrap ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Primary Person"
                    name="primaryContactPerson"
                    {...register("primarycontactperson")}
                  />
                  {errors.primarycontactperson && (
                    <p>{errors.primarycontactperson.message}</p>
                  )}
                </div>
              </div>

              <div className="col-md-6 col-lg-4 input-wrapper required">
                <label className="input-label required">
                  Company Registration Number
                </label>
                <div className="input-wrap ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Registration Number"
                    {...register("companyregistrationnumber")}
                  />
                  {errors.companyregistrationnumber && (
                    <p>{errors.companyregistrationnumber.message}</p>
                  )}
                </div>
              </div>

              <div className="col-md-6 col-lg-4 input-wrapper">
                <label className="input-label">
                  VAT Number
                  <span className="text-lowercase">(if applicable)</span>
                </label>
                <div className="input-wrap ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vat number"
                    {...register("vat")}
                  />
                  {errors.vat && <p>{errors.vat.message}</p>}
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="input-wrapper required">
                  <label className="input-label required">Phone Number</label>
                  <div className="input-wrap ">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile"
                      {...register("phonenumber")}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="inputs-heading">Registered Business Address</div>
            <div className="row input-block">
              <div className="col-md-6 input-wrapper required">
                <label className="input-label required">address line 1</label>
                <div className="input-wrap ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    {...register("addressline1")}
                  />
                  {errors.addressline1 && <p>{errors.addressline1.message}</p>}
                  <span className="input-info">Building number and Street</span>
                </div>
              </div>

              <div className="col-md-6 input-wrapper">
                <label className="input-label">address line 2</label>
                <div className="input-wrap ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    {...register("addressline2")}
                  />
                  {errors.addressline2 && <p>{errors.addressline2.message}</p>}
                  <span className="input-info">Room/Block/Apartments</span>
                </div>
              </div>

              <div className="col-md-6 input-wrapper required">
                <label className="input-label">Country</label>
                <div className="input-wrap">
                  <select
                    name="countryId"
                    className="form-control"
                    {...register("country")}
                    onChange={stateDataFunction}
                  >
                    <option value="">Please select country</option>
                    {countryData &&
                      countryData?.data?.map((item, index) => {
                        return (
                          <option key={index} value={item?._id}>
                            {item?.name}
                          </option>
                        );
                      })}
                  </select>
                  {errors.country && <p>{errors.country.message}</p>}
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
                  <select
                    className="form-control"
                    name="cityId"
                    {...register("city")}
                  >
                    <option value="">Please select city</option>
                    {cityData && cityData?.data?.map((item,index)=>{
                        return(
                            <option key={index} value={item?._id}>
                               {item?.name}
                            </option>
                        )
                    })}
                  </select>
                  {errors.city && <p>{errors.city.message}</p>}
                </div>
              </div>

              <div className="col-md-6 input-wrapper required">
                <label className="input-label required">
                  ZIP / Postal Code
                </label>
                <div className="input-wrap">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip Code"
                    {...register("postalcode")}
                  />
                  {errors.postalcode && <p>{errors.postalcode.message}</p>}
                </div>
              </div>
            </div>

            <div className="row input-block">
              <div className="col-12 input-wrapper required mb-0">
                <label className="input-label required">Comment</label>
                <div className="input-wrap">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Please enter your comment"
                    name="comment"
                    {...register("comment")}
                  ></textarea>
                  {errors.comment && <p>{errors.comment.message}</p>}
                </div>
                <label className="comment-info input-label required input-info position-static">
                  Comment should not exceed 300 characters.
                </label>
              </div>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                name="privacyPolicy"
                className="form-check-input"
              />
              <label className="form-check-label">
                Please accept our
                <a className="term-conditions" href="/terms-and-conditions">
                  terms and conditions
                </a>
              </label>
              <div className="invalid-feedback"></div>
            </div>
          </div>
          <div className="btn-wrap">
            {/* <input className="btn" type="submit" value="submit" /> */}
            <button className="btn" onSubmit={handleSubmit(onSubmit)} type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Company;
