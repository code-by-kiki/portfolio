import React from "react";
function About()
{
  return(
    <section id='about'>
            <div className='row mt-5'>
             <div className='col'>
             <div className="d-flex justify-content-center">
               <h1><i>About</i></h1>
             </div>
             </div>
             <div className='row'>
                <div className='col-xl-6 col-md-6 me-1'>
                  <h2 className="ms-5 mt-5"><i>Growth Journey</i></h2>
                  <p style={{ textIndent: '10em' }} className='fs-5 mt-4 ms-5 px-5 '>
                      I’m Krithika, an Economics graduate who once wandered without a map.
                      College was a time of joy, not direction—until a friend saw something in me I hadn’t yet discovered.
                      That spark led me to frontend development, where creativity meets logic and design becomes purpose.
                      What began as uncertainty has grown into passion. Today, I build web experiences that are thoughtful,
                      intuitive, and beautifully human.
                  </p>
                </div>
             </div>
           </div>
     </section>
  );
}

export default About;