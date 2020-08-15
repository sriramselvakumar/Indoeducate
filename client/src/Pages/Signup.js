import React, { useState } from "react";
import "../CSS/Signup.css";
import Logo from "../Images/logo.svg";
import http from "../Axiosconfig/axios_settings";
import urls from "../Routes.json";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifiedPass, setVerfiedPass] = useState("");

  const onSubmit = async () => {
    if (password !== verifiedPass) {
      setPassword("");
      setVerfiedPass("");
      return;
    }
    const res = await http.post(urls.registerUser, { email, password });
    if (res.data !== "User already exists") {
      localStorage.setItem("token", res.data);
      window.location = "/option";
    }
  };
  return (
    <React.Fragment>
      <div class="wrapper"></div>
      <div class="form" id="sign-up-form">
        <div class="logo-container2">
          <img src={Logo} alt="Logo" />
        </div>
        <h2 class="form-title">Get started with Indo-Edu</h2>
        <h6 class="formsubtitle">Enter your information below</h6>
        <input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          class="input-std"
          value={email}
          id="email"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          class="input-std"
          id="password"
          value={password}
          placeholder="Password"
        />
        <input
          type="password"
          onChange={(event) => setVerfiedPass(event.target.value)}
          class="input-std"
          value={verifiedPass}
          id="password-confirmation"
          placeholder="Password Confirmation"
        />
        <button
          type="button"
          onClick={onSubmit}
          class="btn-submit"
          id="sign-up"
        >
          Get Started Today
        </button>
        <h6 class="formlast">Already Have an Account? Log In Here.</h6>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
