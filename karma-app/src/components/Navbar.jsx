import React from "react";
import PageContent from "../PageContent";

const Navbar = () =>{
    
    return(
        // Main Navigation Start here///////

        <div className="main-navbar">
            

            <div className="k-logo">
                <img src="img/k.png"></img>
            </div>
            <div className ="right-nav">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <a href="#">Home</a>
                        <a href="#">Pages</a>
                        <a href="#">Projects</a>
                        <a href="#">Bolg</a>
                        <a href="#">Contact</a>
                    </li>
                </ul>

            </div>
            <div className="btn btn-danger btn-smart">Get Started</div>
        </div>
        
        /////Main Div end here ////////
    )
    
   
}
export default Navbar;