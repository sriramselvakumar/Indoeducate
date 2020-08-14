import React, { useState } from "react";
import "../CSS/Signup.css"
import Logo from '../Images/logo.svg'


const SignUp = () => {
  return ( <React.Fragment>
<div class="wrapper">
</div>
<div class="form" id="sign-up-form">
<div class="logo-container2">
            <img src= {Logo} alt="Logo"/>
        </div>
  <h2 class="form-title">Get started with Indo-Edu</h2>
  <h6 class="formsubtitle">Enter your information below</h6>
  <input type="text" class="input-std" id="email" placeholder="Email"/>
  <input type="password" class="input-std" id="password" placeholder="Password"/>
  <input type="password" class="input-std" id="password-confirmation" placeholder="Password Confirmation"/>
  <button type="button" class="btn-submit" id="sign-up">Get Started Today</button>
  <h6 class="formlast">Already Have an Account? Log In Here.</h6>
</div>
  </React.Fragment> );
}
 
export default SignUp;
