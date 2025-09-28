import React from "react";
import About from "../components/About";

function AboutData(props){

    const {name,level}=props;

  

    return(
        <div className="container">
           <div className="row">
            <div className="col-md-6 card" style={{padding:'30px'}}>
             <div className="cardTitle">
                <h2>{name}</h2>
             </div>
             <div className="cardText">
                <input type="range" min='1' max='100' value={level} className="sider" />
             </div>
            </div>
           </div>
        </div>
    )
}
export default AboutData;