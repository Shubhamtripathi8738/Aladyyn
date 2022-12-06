import { useState } from "react";

const EditUserProfile=()=>{
    let x = [4,7,8,9, 65]

    const[state,setState]=useState("")
    return(
        <>
        {
            x.length ? (x.includes(65) ? (x.length>2 ? <h1>yes specific</h1> : <h1>Length</h1>) : <h1>yes data</h1>) : <h1>Not found</h1>
        }
        <section className="user-profile edit">
    <div className="">
        <div className="Toastify"></div>
    </div>
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" >User Account</a></li>
                <li className="breadcrumb-item"><a href="#" >User Profile</a></li>
                <li className="breadcrumb-item active" aria-current="page">Edit User Profile</li>
            </ol>
        </nav>
        <h1>Edit User Profile</h1>
        <form>
            <div className="account-info">
                <div className="card account-card inputs-wrapper">
                    <div className="account-heading">Account Information</div>
                    <div className="row input-block">

                        <div className="col-md-6 input-wrapper required">
                            <label className="input-label">first name</label>
                            <div className="input-wrap ">
                            <input type="text" className="form-control" name="firstName"
                                  placeholder="First Name"/>
                                <span className="error">
                                    </span>
                                    </div>
                        </div>

                        <div className="col-md-6 input-wrapper required">
                            <label className="input-label">last name</label>
                            <div className="input-wrap ">
                            <input type="text" className="form-control" name="lastName"
                                    placeholder="Last Name"/>
                                <span className="error"></span>
                                </div>
                        </div>

                        <div className="col-md-6 mb-md-0 input-wrapper required">
                        <label className="input-label">email</label>
                            <div className="input-wrap ">
                            <input type="text" className="form-control" name="email"
                                    placeholder="Email"/>
                                <span className="error">
                                    </span>
                                    </div>
                        </div>

                        <div className="col-md-6 mb-md-0 input-wrapper required">
                            <div className="input-wrapper required mb-0">
                                <label>Mobile Number</label>
                                <div className="input-wrap ">
                                    <input type="number" name="phone" className="form-control"
                                        placeholder="Mob"/>
                                        <span className="error">
                                            </span>
                                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card account-card inputs-wrapper">
                    <div className="account-heading">Basic Information</div>
                    <div className="row input-block">
                        <div className="input-wrapper mb-0 required img-input-fix has-input-file"><label
                                className="mb-2">Profile Image</label>
                            <div className="row input-block">
                                <div className="col-lg-8 mb-0 input-wrapper">
                                    <div className="img-input-wrapper">
                                        <div className="img-input"><i className="icon-plus"></i>Upload<input name="image"
                                                type="file" accept="image/*"/></div><span className="img-info">Upload profile
                                            picture</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="btns-wrap"><button className="secondary-btn" type="button">Cancel</button><input className="btn"
                    type="submit" value="submit"/></div>
        </form>
    </div>
</section>
        </>
    );
}
export default EditUserProfile;