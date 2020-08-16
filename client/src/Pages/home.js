import React from "react";
import "../CSS/home.css";
import Logo from "../Images/logo.svg";
import Placeholdertop from "../Images/Placeholdertop.svg";
import Placeholder from "../Images/rectangle.svg";
import { Link } from "react-router-dom";

const homepage = () => {
  return (
    <React.Fragment>
      <header>
        <div class="logo-container">
        <a href="/"><img src={Logo} alt="Logo" /></a>
        </div>
        <nav>
          <ul class="nav-links">
            <li>
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Coming Soon
              </a>
            </li>
          </ul>
        </nav>
        <div class="log">
          <Link to="/login">
            <button class="logIn"> Log In</button>
          </Link>
          <div class="vl"></div>
          <Link to="/signup">
            <button class="getStarted">Get Started</button>
          </Link>
        </div>
      </header>
      <hr class="linetop" />

      <section class="mainSection">
        <h1 class="businessOP">Providing the RESOURCES A STUDENTS NEED</h1>
        <h1 class="titleText">
          Helping <span style={{ color: "#8C63FF" }}>Students</span> find proper
          resources, work smarter, and{" "}
          <span style={{ color: "#8C63FF" }}>get things done.</span>
        </h1>
        <h1 class="bodyText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          nulla nisi id maxime rem non molestiae et quam consequuntur eaque.
          Amet suscipit doloribus quae enim commodi veniam. Id, laborum
          explicabo!
        </h1>
      </section>
      <img class="topimg" src={Placeholdertop} />
      <section class="buttonSection">
        <button class="firstButton" onclick="getStartedPage()">
          Get started on a{" "}
          <span style={{ color: "#FFFFFF" }}>brighter path</span>{" "}
        </button>
      </section>

      <section class="unitySection">
        <div class="topText">
          <h1 class="businessUT">Upload, View, & Learn</h1>
          <h1 class="keepingB">Keeping students and teachers uptodate.</h1>
          <h1 class="enigmaT">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            nulla nisi id maxime rem non molestiae et quam consequuntur eaque.
            Amet suscipit doloribus quae enim commodi veniam. Id, laborum
            explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laboriosam nulla nisi id maxime rem non molestiae et quam
            consequuntur eaque. Amet suscipit doloribus quae enim commodi
            veniam. Id, laborum explicabo!
          </h1>
        </div>

        <section class="featuresdetail">
          <div class="subFeature">
            <ul class="threesection">
              <li class="subfeature">
                {" "}
                <img src={Placeholder} alt="palceholder" />{" "}
              </li>
              <li class="subfeature">
                {" "}
                <img src={Placeholder} alt="palceholder" />{" "}
              </li>
              <li class="subfeature">
                {" "}
                <img src={Placeholder} alt="palceholder" />{" "}
              </li>
            </ul>
          </div>
        </section>

        <div class="infoBoxes1">
          <div class="infoBox1">
            <ul class="boxes1">
              <li class="infoBox">
                {" "}
                <h1 class="infoBoxTitle">Upload Resources</h1>{" "}
                <h1 class="infoBoxText">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nulla nisi id maxime rem non molestiae et quam
                  consequuntur eaque. Amet suscipit doloribus quae enim commodi
                  veniam.
                </h1>{" "}
                <h1 class="learnMore">Learn More</h1>
              </li>
              <li class="infoBox">
                {" "}
                <h1 class="infoBoxTitle">View The Database</h1>{" "}
                <h1 class="infoBoxText">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nulla nisi id maxime rem non molestiae et quam
                  consequuntur eaque. Amet suscipit doloribus quae enim commodi
                  veniam.
                </h1>{" "}
                <h1 class="learnMore">Learn More</h1>{" "}
              </li>
              <li class="infoBox">
                {" "}
                <h1 class="infoBoxTitle">Learn To Implement</h1>{" "}
                <h1 class="infoBoxText">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laboriosam nulla nisi id maxime rem non molestiae et quam
                  consequuntur eaque. Amet suscipit doloribus quae enim commodi
                  veniam.
                </h1>{" "}
                <h1 class="learnMore">Learn More</h1>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bottom">
        <div class="final">
          <div class="final-text">
            <h1 class="finalHeader">
              School shouldn’t be{" "}
              <span style={{ "font-weight": "bold" }}>stressful.</span>
            </h1>
            <p class="finalsubHeader">
              Leave all the research and redundant need to find textbooks to
              Indo-Edu and focus on what really matters{" "}
              <span style={{ color: "#8C63FF" }}>
                {" "}
                - getting homework done.
              </span>
            </p>
          </div>
          <div class="cta">
            <button class="cta-try">
              Get started on a{" "}
              <span style={{ color: "#FFFFFF" }}>brighter path</span>{" "}
            </button>
          </div>
        </div>
      </section>
      <hr class="linefoot" />

      <footer>
        <h4 class="reserved">© 2020 Indo-Edu, Inc. All rights reserved.</h4>
        <img class="logofoot" src={Logo} alt="Logo" />
      </footer>
    </React.Fragment>
  );
};

export default homepage;
