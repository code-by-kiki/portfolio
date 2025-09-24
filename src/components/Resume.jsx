import React from "react";

function Resumedatas(props)
{
    return(
        <div className="container-fulid">
            <div className="row mt-5" style={{background:"rgb(68, 68, 78)", padding:'10px'}}>
            </div>
            <div className="row">
                <div className="col">
                    <h1 className="mt-5" style={{alignItems:"justify-content-end"}}>{props.name}</h1>
                </div>
            </div>
         
        </div>
    );
}

export default Resumedatas;