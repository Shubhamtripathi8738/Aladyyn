
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { signUpAction } from "../Store/Action";
import 'react-toastify/dist/ReactToastify.css';

const SignUp=()=>{

const dispatch=useDispatch();
const navigate=useNavigate();



const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const notify = () => toast("This user is already existing");


const onSubmit=(data)=>{
   const data1={
    email:data.email,
    firstName:data.firstName,
    lastName:data.lastName,
     password:data.password,
     phone:data.phone,
     type: "User"
    }
    signUpAction(navigate,dispatch,data1,notify)
    console.log(data1);
}


    return(
        <>
        <section className="create-account">
    <div className="Toastify"></div>
    <div className="container">
        <div className="card">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row inputs-wrapper">

                    <div className="col-md-6 pr-fix input-block">
                        <div className="input-wrapper required"><label>First Name</label>
                            <div className="input-wrap ">
                                <input type="text" name="firstName" className="form-control"
                                    placeholder="First Name" {...register("firstName")}/>
                                    </div>
                        </div>
                    </div>

                    <div className="col-md-6 pl-fix input-block">
                        <div className="input-wrapper required"><label>Last Name</label>
                            <div className="input-wrap ">
                                <input type="text" name="lastName" className="form-control"
                                    placeholder="Last Name" {...register("lastName")}/>
                                    </div>
                        </div>
                    </div>

                </div>
                <div className="row inputs-wrapper">
                    <div className="col-12 input-block">
                        <div className="input-wrapper required"><label >Mobile Number</label>
                            <div className="input-wrap ">
                                <input type="number" name="phone" className="form-control"
                                    placeholder="Phone" {...register("phone")} />
                                    </div>
                        </div>
                    </div>

                    <div className="col-12 input-block">
                        <div className="input-wrapper required"><label >Email Address</label>
                            <div className="input-wrap ">
                                <input type="text" name="email" className="form-control"
                                    placeholder="Email" {...register("email")} />
                                    </div>
                        </div>
                    </div>

                    <div className="col-12 input-block">
                        <div className="input-wrapper required"><label >Password</label>
                            <div className="input-wrap ">
                                <input type="password" className="form-control" name="password"
                                    placeholder="***********" {...register("password")} />
                                <div className="toggle-wrap"><i className="icon-eye "></i></div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 input-block">
                        <div className="input-wrapper required"><label >Confirm Password</label>
                            <div className="input-wrap "><input type="password" name="confirmpassword" className="form-control"
                                    placeholder="************" {...register("confirmpassword")} />
                                <div className="toggle-wrap"><i className="icon-eye "></i></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 mb-2 mb-md-0">
                        <div className="form-check contain-checkbox">
                            <input type="checkbox" name="privacyPolicy"
                                id="selectCheckbox" className="form-check-input " {...register("privacypolicy")} />
                                <label className="form-check-label">By signing
                                in you agree to the <a href="/user-terms-conditions" target="_blank">Terms and
                                    Conditions</a> of Aladyyn</label>
                            <div className="invalid-feedback"></div>
                        </div>
                    </div>
                </div>

              
             <ToastContainer/>

                <div className="btn-wrap"><button type="submit" className="btn w-100">Create Account</button></div>
            </form>
        </div>
        <div className="card text-center">
            <div className="signin-wrap">Already have an account? <a className="signin-link" ><Link to="/sign_in">Sign In</Link></a> </div>
        </div>
    </div>
</section>
        </>
    );
}
export default SignUp;




{/* <div className="App">
<form onSubmit={handleSubmit(onSubmit)}>

  <div className="form-control">
    <label>Email</label>
    <input type="text" name="email" {...register("email")} />
  </div>

  <div className="form-control">
    <label>Password</label>
    <input type="password" name="password" {...register("password")} />
  </div>
  <div className="form-control">
    <label></label>
    <button type="submit">Login</button>
  </div>
</form>
</div> */}