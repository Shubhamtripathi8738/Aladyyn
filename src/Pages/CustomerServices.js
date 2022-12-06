import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { contactDataAction} from "../Store/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const CustomerServices=()=>{


const dispatch=useDispatch();
const navigate=useNavigate();


    const SignupSchema = yup.object().shape({
        firstName: yup.string().required(),
        Email: yup.string().email(),
        lastName:yup.string().required(),
        phoneNumber:yup.number().required(),
        issues:yup.string().required(),
        email:yup.string().required(),
        comments:yup.string().required()
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
const data={
    firstName:e.firstName,
    lastName:e.lastName,
    comment:e.comments,
    email:e.email,
    phone:e.phoneNumber,
    attachment:e.uploadfiles,
    typeOfIssue:e.issues
}
contactDataAction(navigate,dispatch,data)
}



    return(
        <>
        <section className="customer-service">
    <div className="Toastify"></div>
    <div className="">
        <div className="Toastify"></div>
    </div>
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a role="button" >Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Customer Service</li>
            </ol>
        </nav>
        <h1>Customer Service</h1>
        <div className="card">

            <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="inputs-wrapper">
                    <div className="row">


                        <div className="col-md-6 col-xl-4 input-wrapper required">
                            <label className="input-label">first name</label>
                            <div className="input-wrap ">
                        <input type="text" className="form-control" placeholder="First Name"
                        {...register("firstName")}
                        />
                        {errors.firstName && (
                            <p>
                                {errors.firstName.message}
                            </p>
                        )}
                        </div>
                        </div>

                        <div className="col-md-6 col-xl-4 input-wrapper required">
                            <label className="input-label">last name</label>
                            <div className="input-wrap ">
                            <input type="text" className="form-control" placeholder="Last Name"
                            {...register("lastName")}
                            />
                            {errors.lastName && (
                                <p>
                                    {errors.lastName.message}
                                </p>
                            )}
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4 input-wrapper required">
                            <label className="input-label">Email address</label>
                            <div className="input-wrap ">
                            <input type="email" name="email" className="form-control" placeholder="example@aladyyn.pro"
                            {...register("email")}
                            />
                            {errors.email && (
                                <p>
                                    {errors.email.message}
                                </p>
                            )}
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4 input-wrapper required">
                            <label className="input-label">Phone Number</label>
                            <div className="input-wrap ">
                            <input type="number" name="phone" className="form-control" placeholder="Phone Number" 
                            {...register("phoneNumber")}
                            />
                            {errors.phoneNumber && (
                                <p>
                                    {errors.phoneNumber.message}
                                </p>
                            )}
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-4 input-wrapper required">
                            <label className="input-label text-transform-initial">Type of Issue</label>
                            <div className="select-wrap price-select input-wrap ">
                            <select className="react-select-container form-control drop-down" name="typeOfIssue" {...register("issues")}>
                                    <option value="">Please Select issue</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    
                                </select>
                                {errors.issues && (
                                    <p>
                                        {errors.issues.message}
                                    </p>
                                )}
                                </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 input-wrapper required textarea-info-wrapper textarea-info-wrapper">
                            <label className="input-label">Comment</label>
                            <div className="input-wrap ">
                        <textarea type="text" className="form-control" name="comment" placeholder="Tell us more about the services you provide" {...register("comments")}>
                            
                            </textarea>
                            <label className="textarea-info comment-info input-label required input-info position-static">Comment
                                    should not exceed 300 characters.</label>
                                    {errors.comments && (
                                        <p>
                                            {errors.comments.message}
                                        </p>
                                    )}
                                    </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-xl-4 input-wrapper has-input-file">
                            <label className="">Upload File</label>
                            <div className="img-input-wrapper">
                                <div className="img-input w-100">
                                    <i className="icon-plus"></i>Upload<input name="attachment"
                                        type="file" accept="image/*"
                                        {...register("uploadfiles")}
                                        />
                                        {errors.uploadfiles && (
                                <p>
                                    {errors.uploadfiles.message}
                                </p>
                            )}
                                        </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="btn-wrap">
                    <button type="button" className="btn secondary-btn">Cancel</button>
                    <input className="btn" type="submit" />
                </div>
            </form>
        </div>
    </div>
</section>
        </>
    );
}
export default CustomerServices;