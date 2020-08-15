import React, { useState } from "react";
import "../CSS/Login.css"
import Logo from '../Images/logo.svg'


const SignUp = () => {
  return ( <React.Fragment>
<div class="wrapper2">
</div>
<div class="form2" id="sign-up-form2">
<div class="logo-container2">
            <img src= {Logo} alt="Logo"/>
        </div>
  <h2 class="form-title2">Sign-in with Indo-Edu</h2>
  <h6 class="formsubtitle2">Enter your information below</h6>
  <input type="text" class="input-std2" id="email2" placeholder="Email"/>
  <input type="password" class="input-std2" id="password2" placeholder="Password"/>
  <button type="button" class="btn-submit2" id="sign-up2">Login</button>
  <h6 class="formlast2">Need an Account? Sign up here.</h6>
</div>
  </React.Fragment> );
}
 
export default SignUp;
