import React from "react";
import picture from '../assest/Vi-Project.png'
function Project(){

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 card">
                  <img src={picture} alt="Vi" style={{width:'30rem',height:'20rem'}}/>
                  <div className="card-title mt-5" >
                    <h4>Duplicating the Vodofone Home Page</h4>
                    <p className="mt-4" style={{textAlign:'center',textIndent:'5rem'}}>Duplicating the vodofone Home page with the help of Html,CSS,JavaScript and Bootstrap  </p>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default Project;