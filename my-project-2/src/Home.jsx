import React from "react";
import web from "../src/images/img1.webp";
import Common from "./Common";

const Home = () =>{
    return(
        <>
        <Common 
            name="Welcome to Home Page"
            imgsrc ={web}
            visit="/service"
            btname ="Get Started"
        />
       </>
    );
};

export default Home;