import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../CSS/upload.css"
import Logo from '../Images/logo.svg'
import Logouploadpage from '../Images/logo-uploadpage.svg'


const Upload = () => {
    return (<React.Fragment>
        <div class="header-uploadpage">
            <div class="logo-container">
            <a href="/"><img src={Logo} alt="Logo" /></a>
            </div>
            <div class="nav-uploadpage">
                <ul class="nav-links-uploadpage">
                    <li><button class="upload-uploadpage"><a href="/upload">Upload</a></button></li>
                    <li><a class="nav-link-uploadpage" href="/resources"><p class="nonButton-uploadpage">View</p></a></li>
                    <li><a class="nav-link-uploadpage" href="/"><p class="nonButton-uploadpage">Home</p></a></li>
                </ul>
            </div>
        </div>
        <hr class="linetop-uploadpage" />
        <section class="content-uploadpage">
            <section class="title-uploadpage">
                <h3 class="subTitle-uploadpage"><span class='col-uploadpage'>Upload</span> any resources that other users might require</h3>
            </section>
            <br></br><br></br><br></br>
            <section class="dragDrop-uploadpage">
                <div id="content-uploadpage">
                <label class="file-up" for="file"></label>
                <input type="file" id="file" name="file" multiple/>
                <div><button class="uploadbtn">Upload</button></div>

                </div>
                <div class="logo-container-uploadpage">
                    <img class="svg" src={Logouploadpage} alt="Logo" />
                </div>
            </section>
            <section class="links-uploadpage">
                <form>
                    <input class="onlineSources-uploadpage" placeholder="Enter link to video resources or to online documents...."></input>
                </form>
            </section>
        </section>

        <hr class="linefoot-uploadpage" />

        <div class="footer-uploadpage">

            <h4 class="reserved-uploadpage">© 2020 Indo-Edu, Inc. All rights reserved.</h4>
            <img class="logofoot-uploadpage" src={Logo} alt="Logo" />
        </div>
    </React.Fragment>);
}



export default Upload;
