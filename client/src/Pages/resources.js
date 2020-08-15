import React, { useState } from "react";
import "../CSS/resources.css"
import Logo from '../Images/logo.svg'


const Resources = () => {
    return (<React.Fragment>
        <header>
            <div class="logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a class="nav-link" href="#"><p class="nonButton">Upload</p></a></li>
                    <li><button class="view"><a href="#">View</a></button></li>
                    <li><a class="nav-link" href="#"><p class="nonButton">Contact Us</p></a></li>
                </ul>
            </nav>
        </header>
        <hr class="linetop" />
        <section class="content">
            <section class="title">
                <h1 class="recentUpload">Recently Uploaded</h1>
                <br></br>
                <h3 class="subTitle">Click "Open Resources" to access the resources</h3>
            </section>
            <br></br><br></br>
            <section class="resources">
                <ul class="resourceList">
                    <li class="listItem"><div class="row">
                        <div class="column">
                            <p>Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem"><div class="row">
                        <div class="column">
                            <p>Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem"><div class="row">
                        <div class="column">
                            <p>Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem"><div class="row">
                        <div class="column">
                            <p>Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem"><div class="row">
                        <div class="column">
                            <p>Grade 11 Biology Textbook</p>
                        </div>
                        <div class="column">
                            <button class="linkSource">
                                <a href="#">Open Resource</a>
                            </button>
                        </div>
                    </div>
                    </li>
                    <li class="listItem"><div class="row">
                        <div class="column">
                            <p>Grade 11 Biology Textbook</p>
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

        <hr class="linefoot" />

        <footer>

            <h4 class="reserved">© 2020 Indo-Edu, Inc. All rights reserved.</h4>
            <img class="logofoot" src={Logo} alt="Logo" />
        </footer>
    </React.Fragment>);
}

export default Resources;
