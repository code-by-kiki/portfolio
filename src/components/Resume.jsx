import React from "react";
import picture from '../assest/profile-pic.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Resumedatas() {
   
   const Eduction=[
    { name : 'St.Theresa Girls Higher Secondary School',places:'Pallavaram',studied:'SSLC',passout:'2020'},
    { name : 'St.Theresa Girls Higher Secondary School',places:'Pallavaram',studied:'HSC',passout:'2022'},
    { name : 'Lady Dock College',places:'Thalakulam,Madurai',studied:'B.A Economics',passout:'2025'},
    { name : 'ecareer pluz',places:'Puthur,Madurai', studied:'Java Full-Stack',passout:'2025'}
   ]

   const certification=[
    {name:"NSS"},{name:"Digital Marketing"},{name:"Java Full-Stack Web Development"}
   ]
   
   const language=[
    {name:'Tamil'}, {name: 'English'}
   ]
   
   const frontend=[{name: "Html",icon:<i class="bi bi-filetype-html"></i>},{name: "Css",icon:<i class="bi bi-filetype-css"></i>},{name: "Javascript",icon:<i class="bi bi-javascript"></i>},{name: "Bootstrap",icon:<i class="bi bi-bootstrap"></i>},{name: "React",icon:<i class="bi bi-filetype-jsx"></i>}];
   
   const backend=[{name:"Core Java",icon:<i class="bi bi-filetype-java"></i>},{name:"Java",icon:<i class="bi bi-filetype-java"></i>}]

  const database=[{name:'My SQL',icon:<i class="bi bi-filetype-sql"></i>},{name:'MangoDB',icon:<i class="bi bi-leaf"></i>}]

  const tool=[{name:'Git-Hub',icon:<i class="bi bi-github"></i>}] 

  const skill=[{name: "Communication"},{name:"problem solving"},{name:"Adaptability"}]

  return (
    <div className="container-fluid" style={{ fontFamily: 'serif' }}>
      <div className="row mt-5" style={{ background: "rgb(68, 68, 78)", padding: '10px' }}></div>

      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-md-6 col-sm-4 mt-3 text-md-start text-center">
          <img src={picture} alt="Krithika Profile" className="d-none d-sm-block" style={{ maxWidth: '150px', borderRadius: '25rem' }} />

          <div className="row">
            <div className="col mt-5 fw-bold">
              <h4 className="fw-bold fs-2 mb-4">Contact</h4>
              <p><i className="bi bi-telephone"></i> 6374760410</p>
              <p><i className="bi bi-envelope"></i> root.krithika10@gmail.com</p>
              <p><i className="bi bi-linkedin"></i> <a href="https://www.linkedin.com/in/krithika-selvam-km10" className="text-decoration-none text-dark">Linkedin</a></p>
              <p><i className="bi bi-github"></i> <a href="https://github.com/" className="text-decoration-none text-dark">Repository</a></p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <h4 className="fw-bold fs-2 mb-4">Certification</h4>
              {certification.map((certificate,index)=>
              (
               <div key={index}>
                {<>🎓 {certificate.name}</>}
               </div>
              )
              )}
            </div>
          </div>
         

          <div className="row mt-5">
              <h4 className="fw-bold fs-2 mb-4">Internship</h4>
              <p><b>Organization:</b> <i>State Bank of India</i></p>
              <p><b>Role:</b> <i>Intern</i></p>
              <p><b>Duration:</b> <i>Two Weeks</i></p>
              <p><b>Responsibilities:</b> <i>Customer Interaction and Record Maintenance</i></p>
          </div>
          
         <div className="row mt-5">
          <h4>Soft Skills</h4>
           {skill.map((Skills,index)=>
          (
            <div key={index}>
              {<><i class="bi bi-asterisk fs-6"></i> {Skills.name}</>}
            </div>
          ))}
         </div>


          <div className="row mt-5">
            <h4>Language</h4>
            {language.map((lang,index)=>
            (
              <div key={index}>
                {<p> <i className="bi bi-translate "></i> {lang.name}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 col-sm-8 text-start">
          <h1 className="mt-5 text-md-end">Krithika</h1>
          <pre className="text-md-end">Web Developer</pre>

          <div className="row mt-5 text-md-start text-center">
            <h4 className="mb-3 fw-bold fs-2"><i>Profile</i></h4>
            <p style={{ textAlign: 'justify', textIndent: '2rem' }}>
              Economics graduate with hands-on training in full-stack web development and a
              strong foundation in business analysis and data-driven problem solving. Proficient in building responsive websites and dynamic applications using modern technologies. Passionate about creating meaningful digital solutions and continuously expanding technical expertise.
              Seeking opportunities to grow as a developer and contribute to impactful, real-world projects.
            </p>
          </div>
          <div className="row mt-5">
            <h4 className="mb-3 fw-bold fs-2">Object</h4>
            <p>Economics graduate and certified full-stack developer passionate about building 
              impactful digital solutions and growing through real-world experience.</p>
          </div>
          
          <div className="row mt-5">
             <h4 className="mb-4 fw-bold fs-2">Eduction</h4>
              {Eduction.map((data,index)=>
              (
                <div key={index}>
                  {<><h3><i class="bi bi-book-half"></i> {data.studied}-{data.name}</h3>
                   <p><i class="bi bi-calendar2-week "></i> {data.passout} <i class="bi bi-geo-alt"> {data.places}</i> </p>
                  </>}
                </div>
              )
              
              )}
          </div>

          <div className="row mt-5">
           <h4 className="mb-4 fw-bold fs-2">Technical Skill</h4>
           <h4><i>Frontend</i> </h4>
           <dl className="list-inline d-flex gap-4 mt-2">
           {frontend.map((skill,index)=>
          (
           <dt key={index} className="list-inline-item "> {skill.icon} {skill.name}</dt>
          )
          )} 
          </dl>
          <h4><i>Backend</i></h4>
          <dl className="list-item d-flex gap-4 mt-2">
           {backend.map((skill,index)=>
          (
            <dt key={index} className="list-inline-item">{skill.icon} {skill.name} </dt>
          ))}
          </dl>
                
           <h4><i>DataBase</i></h4>
            <dl className="list-inline d-flex gap-4 mt-2">
              {database.map((skill,index)=>
              (
              <dt className="list-inline-item">{skill.icon} {skill.name}</dt>
              ))}
            </dl>
          </div>
           
           <h4><i>Tools</i></h4>
           <dl className="list-inline d-flex gap-4">
            {tool.map((skill,index)=>
            (
              <dt className="list-inline-item">{skill.icon} {skill.name} </dt>
            ))}
           </dl>

        </div>
      </div>
    </div>
  );
}

export default Resumedatas;
