import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage1 from "../images/feature_1.png";
import featureimage2 from "../images/feature_2.png";
import featureimage3 from "../images/feature_3.png";

function Feature() {

    return(
        <>
        <div className="feature">
            <div className="a-container">
                <FeatureBox image={ featureimage1 } title={ "Development Course" } />
                <FeatureBox image={ featureimage2 } title={ "React Js Course" } />
                <FeatureBox image={ featureimage3 } title={ "Mern Stack Development Course" } />
                <FeatureBox image={ featureimage1 } title={ "Futter Course" } />
            </div>
        </div>
        </>
    );

}

export default Feature;