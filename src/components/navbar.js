import React from 'react';
function nav()
{
   return(
        <section>
        <nav className='navbar nav-tab'>
           <ul className='list-inline'>
            <li className='list-inline-item'><a href='about'>About</a></li>
             <li className='list-inline-item'><a href='#'>Projects</a></li>
              <li className='list-inline-item'><a href='#'>Resume</a></li>
               <li className='list-inline-item'><a href='#'>contact</a></li>
           </ul>
        </nav>
        </section>
    );
}

export default nav; 