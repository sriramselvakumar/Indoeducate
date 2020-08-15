import React, { useState } from "react";
import "../CSS/resources.css"
import Logo from '../Images/logo.svg'


const Resources = () => {
    return (<React.Fragment>
        <div class="headerresource">
            <div class="logo-container-resource">
                <img src={Logo} alt="Logo" />
            </div>
            <div class="nav-resource">
                <ul class="nav-links-resource">
                    <li><a class="nav-link-resource" href="#"><p class="nonButton-resource">Upload</p></a></li>
                    <li><button class="view-resource"><a href="#">View</a></button></li>
                    <li><a class="nav-link-resource" href="#"><p class="nonButton-resource">Contact Us</p></a></li>
                </ul>
            </div>
        </div>
        <hr class="linetop-resource" />
        <section class="content-resource">
            <section class="title">
                <h1 class="recentUpload-resource">Recently Uploaded</h1>
                <br></br>
                <h3 class="subTitle-resource">Click "Open Resources" to access the resources</h3>
            </section>
            <br></br><br></br>
            <section class="resources">
                <ul class="resourceList">
                    <li class="listItem-resource"><div class="row">
                        <div class="column">
                            <p class="resourcetitle">Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem-resource-down"><div class="row">
                        <div class="column">
                            <p class="resourcetitle-down">Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource-down">
                                <a href="#">Download Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem-resource"><div class="row">
                        <div class="column">
                            <p class="resourcetitle">Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem-resource"><div class="row">
                        <div class="column">
                            <p class="resourcetitle">Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem-resource"><div class="row">
                        <div class="column">
                            <p class="resourcetitle">Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem-resource"><div class="row">
                        <div class="column">
                            <p class="resourcetitle">Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                </ul>
            </section>
        </section>

        <hr class="linefoot-resource" />

        <div class="footer-resource">

            <h4 class="reserved-resource">© 2020 Indo-Edu, Inc. All rights reserved.</h4>
            <img class="logofoot-resource" src={Logo} alt="Logo" />
        </div>
    </React.Fragment>);
}

export default Resources;
