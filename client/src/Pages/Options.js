import React, { useState } from "react";
import "../CSS/Options.css"
import Logo from '../Images/logo.svg'

const Options = () => {
    return ( <React.Fragment>
    <header2>
        <div class="logo-container-options">
            <img src= {Logo} alt="Logo-options"/>
        </div>
        <nav>
            <ul class="nav-links-options">
                <li><a class="nav-link-options" href="#">Features</a></li>
                <li><a class="nav-link-options" href="#">About Us</a></li>
                <li><a class="nav-link-options" href="#">Coming Soon</a></li>
            </ul>
        </nav>
    </header2>
    </React.Fragment> );
}
 
export default Options;