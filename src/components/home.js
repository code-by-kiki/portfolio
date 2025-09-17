import React from 'react';
import About from './About';
import picture from '../assest/profile-pic.jpg'
function Introduction(){
    return (
        
        <section style={{backgroundColor:'snow'}}>
         
        <div className='container'>
            <div className='row mb-5 mt-5 pt-5 md-d-flex justify-content-center'>

                 <div className='col-xl-4 mt-5 pt-5 me-5 mb-5 '>
              <img src={picture} alt="Profile" className="img-fluid" width={450} height={450} />
                </div>

                <div className='col-xl-6  me-2 '>
                    <h2 class='d-flex justify-content-center mt-5'><i>Introduction</i></h2>
                     <p style={{textIndent:'10em'}} className='card body p-5 mt-5 fs-5'>Hi, I'm Krithika — an Economics graduate turned passionate Full Stack Web Developer.  
                     I specialize in crafting responsive, accessible, and visually engaging websites using Java, React, and Bootstrap.  
                     My work blends analytical thinking with creative design to build user-friendly digital experiences.  
                     I believe in inclusive design, elegant layouts, and continuous learning.  
                     Explore my projects to see how I turn ideas into interactive web solutions.
                    </p>
                </div> 

               
            </div>
     
        </div>
           <About/>
        </section>
        
    )
}

export default Introduction;

