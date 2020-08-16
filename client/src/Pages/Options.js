import React, { useState } from "react";
import "../CSS/Options.css";
import Logo from "../Images/logo.svg";
import Option1 from "../Images/option1.svg";
import Option2 from "../Images/option2.svg";
import { Link } from "react-router-dom";
import urls from "../Routes.json";

const Options = () => {
  return (
    <React.Fragment>
      <div class="headeroptions">
        <div class="logo-container-options">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div class="nav-options">
          <ul class="nav-links-options">
            <li>
              <button class="upload-options">
                <a href={urls.baseURL + "/upload"}>Upload</a>
              </button>
            </li>
            <li>
              <a class="nav-link-options" href={urls.baseURL + "/resources"}>
                <p class="nonButton-options">View</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="linetop-options" />
      <div class="option-container">
        <ul class="bothoptions">
          <li class="option-card1">
            <img src={Option1} alt="Card1" />
            <Link to="/upload">
              <button class="optionupload1">
                <a class="cardtextupload" href="#">
                  Ready to Upload?
                </a>
              </button>
            </Link>
          </li>

          <li class="option-card2">
            <img src={Option2} alt="Card2" />
            <Link to="/resources">
              <button class="optionresource2">
                <a class="cardtextresource" href="#">
                  View the Resources
                </a>
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <hr class="linefoot-options" />

      <div class="footer-options">
        <h4 class="reserved-options">
          © 2020 Indo-Edu, Inc. All rights reserved.
        </h4>
        <img class="logofoot-options" src={Logo} alt="Logo" />
      </div>
    </React.Fragment>
  );
};

export default Options;
