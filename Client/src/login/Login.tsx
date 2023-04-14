import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
interface Form {
  name : string,
  email : string,
  password : string
}
const Login = (props:any) => {

  const { register , handleSubmit } = useForm<Form>();
  const OnhandleSubmit : SubmitHandler<Form> = (data:Form) => {
    props.Onlog(data)
  }
  return (
    <div>
  <section className="background-radial-gradient overflow-hidden" style={{width : "1519px"}}>
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 flex justify-center align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
          <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
          <div className="card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
              <form onSubmit={handleSubmit(OnhandleSubmit)}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4" style={{width: "500px"}}>
                    <div className="form-outline " style={{marginLeft : "150px", fontFamily : 'fantasy'}}>
                      <h1>Sign In</h1>
                    </div>
                  </div>  
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" {...register("email", {required : true})} className="form-control" />
                  <label className="form-label"  htmlFor="form3Example3">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" {...register("password", {required : true})} className="form-control" />
                  <label className="form-label"  htmlFor="form3Example4">Password</label>
                </div>
                {/* Checkbox */}  
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4 text-black">
                  Sign up
                </button>
                {/* Register buttons */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Login