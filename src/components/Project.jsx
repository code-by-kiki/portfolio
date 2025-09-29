import React from "react";
import picture from '../assest/Vi-Project.png';


function Project(){

  
    return(
        <div className="container my-5">
            <div className="row align-item-center g-3">
                <div className="col-md-6 card" >
              
                  <img src={picture} alt="Vi" className="fluid rounded"/>
                  
                  <div className="card-body">
                    <div className="card-title">
                      <h4 >Duplicating the Vodofone Home Page</h4>
                    </div>
                    <div className="card-text">
                     <p className="mt-4" style={{textAlign:'justify',textIndent:'5rem'}}>Duplicating the vodofone Home page with the help of Html,CSS,JavaScript and Bootstrap  </p>
                    </div>                 
                  </div>
                </div>
            </div>
        </div>
    )
}
export default Project;