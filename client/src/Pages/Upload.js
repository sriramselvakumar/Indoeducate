import React, { useState } from "react";
import "../CSS/upload.css"
import Logo from '../Images/logo.svg'


const Upload = () => {
    return (<React.Fragment>
        <header>
            <div class="logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <nav>
                <ul class="nav-links">
                    <li><button class="upload"><a href="#">Upload</a></button></li>
                    <li><a class="nav-link" href="#"><p class="nonButton">View</p></a></li>
                    <li><a class="nav-link" href="#"><p class="nonButton">Contact Us</p></a></li>
                </ul>
            </nav>
        </header>
        <hr class="linetop" />
        <section class="content">
            <section class="title">
                <h3 class="subTitle"><span class='col'>Upload</span> any resources that other users might require</h3>
            </section>
            <br></br><br></br><br></br>
            <section class="dragDrop">
                <div id="content">
                    <h3 class="instruct">Drag and drop Resource files or <a class="folder" href="#">click here</a> to be taken to folder.</h3>
                </div>
                <div class="logo-container2">
                    <img class="svg" src={Logo} alt="Logo" />
                </div>
            </section>
            <section class="links">
                <form>
                    <input class="onlineSources" placeholder="Enter link to video resources or to online documents...."></input>
                </form>
            </section>
        </section>

        <hr class="linefoot" />

        <footer>

            <h4 class="reserved">© 2020 Indo-Edu, Inc. All rights reserved.</h4>
            <img class="logofoot" src={Logo} alt="Logo" />
        </footer>
    </React.Fragment>);
}

export default Upload;
