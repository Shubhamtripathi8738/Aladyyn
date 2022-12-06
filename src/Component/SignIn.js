import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, } from 'react-router-dom';
import { loginAction} from '../Store/Action';


const SignInForm = () => {
    const [eyeIcon,setEyeIcon]=useState(true);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();


    const onSubmit= (e) => {

        console.log(e);
        const loginDetails = {
            email: e.email,
            password: e.password,
        }
        loginAction(dispatch, loginDetails,navigate)
    }
const iconButton=()=>{
    setEyeIcon(!eyeIcon);
}


    return (
        <>
            <section className="sign-in">
                <div className="">
                    <div className="Toastify"></div>
                </div>
                <div className="container">
                    <div className="card">
                        <h2>Sign In</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="input-block"><label htmlFor="user-id" className="show-star">Email or phone number</label>
                                <div className="input-wrap">
                                    <input type="text"
                                        name="email" className="form-control"
                                        placeholder="Email or Phone" {...register("email")} />
                                        </div>
                            </div>

                            <div className="input-block"><label htmlFor="password" className="show-star">Password</label>
                                <div className="input-wrap">
                                    <input type={eyeIcon?"password":"text"} className="form-control"
                                        name="password"
                                        placeholder="***********" {...register("password")} />
                                    <div className="toggle-wrap">
                                        <button className="toggle-btn hide" type="button"><i
                                        className="icon-eye" onClick={iconButton}></i>
                                        </button></div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-2 mb-md-0">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox" value=""
                                            name="checkedValue"
                                            {...register("checkedValue")}
                                            />
                                        <label
                                            className="form-check-label">Keep me signed in</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2 mb-md-0 text-md-end">

                                <Link to="/forgot-password" className="forgot-link" >Forgot Password?</Link>
                                </div>
                            </div>

                            <div className="btn-wrap">
                            <button type="submit" className="btn w-100">Sign In</button>
                            </div>
                        </form>
                        <div className="signin-with">or continue with</div>
                        <div className="signin-options text-center"><a className="google-login" href="/sign-in"><i
                            className="icon-google"></i><span className="text">Google</span></a><button></button><a className="fb-login"
                                href="/sign-in"><i className="icon-fb"></i><span className="text">Facebook</span></a></div>
                    </div>

                    <div className="card text-center">
                        <div className="signup-wrap">Don’t have an account?
                            <Link to='/create-account' className="signup-link">Sign Up</Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SignInForm;
