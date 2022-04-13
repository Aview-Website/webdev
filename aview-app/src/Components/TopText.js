import "../Styles/TopText.css";
import React from "react";
import Button from '@mui/material/Button';
import ttHeader from "../img/ttHeader.svg";

function TopText(){
    return(

        <div>
            <div className="container">
                <div className="headLine">
                <header>
                    <img src={ttHeader} alt="" ></img>
                </header>
                </div>
            </div>
            <div className="container">
                <div className="ttDescription">
                    <p>AVIEW is a leading multi-media translation service. We help you expand your international viewership.</p>
                </div>
            </div>
            {/* <div className="container">
                <div className="ttDescription">
                    <button>Contact Us</button>
                </div>
            </div> */}


        </div>

    )


}
export default TopText;

   // <topText >

        //     <div>
        //         <div className="headLine">Increase Your International Fanbase </div>

        //     </div>

        //     <p className="description">
        //     AVIEW is a leading multi-media translation service. We work with content creators to expand their international viewership.            
        //     </p>
        //     <header className="contactUs">
        //         <Button variant = "contained" style={{

        //             fontWeight: 500,
        //             fontSize: "20px",
        //             lineHeight: "50px",
        //             width: "200px",
        //             textTransform: 'none',
        //             color: "#FFFFFF",
        //             background: "linear-gradient(93.07deg, #73BCFF 0.64%, #FE3688 102.01%)",
        //             borderRadius: "50px"
        //         }}>Contact Us</Button>
        //     </header>
        //     <header className="learnMore">
        //         <Button href="#text-buttons" style={{
        //             width: 115,
        //             textDecoration: 'underline',
        //             fontWeight: 400,
        //             fontSize: "18px",
        //             textTransform: 'none',
        //             lineHeight: "23px",                    
        //             color: "#FFFFFF"
        //        }}> Learn More
        //         </Button>
        //     </header>
        // </topText>