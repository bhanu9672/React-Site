import React from "react";
import Navbar from "./Navbar";

function Header() {

    return(
       <>
       <div id="main">
           <Navbar />
           <div className="name">
               <h1> 
                   <span> Lunch Your App </span> 
                   With Confidence And Creativity
                </h1>
                <p className="details"> 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <a herf="#" className="cv-btn"> Download </a>
           </div>
       </div>
       </>
    );

}

export default Header;