import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const skills = [
  { name: 'Core Java', level: 80 },
  { name: 'Java', level: 85 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'Bootstrap', level: 90 },
  { name: 'React', level: 85 },
  { name: 'MySQL', level: 75 },
  { name: 'MangoDb', level: 65 },
   { name: 'GitHub', level: 90 },
];


const certification=[
  {name: 'Java Full-Stack ', issuer:'ecareerpluz',passout:'2025'},
  {name: 'Digital Marketing ', issuer:'ecareerpluz',passout:'2025'},
  {name: 'B.A Economics', issuer:'Lady Doak College',passout:'2025'},
  {name: 'Nss', issuer:'Lady Doak College',passout:'2024'},
]
const Cerificate = ({ name, issuer, passout }) => (
<motion.div
  className="card mb-4" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}transition={{ delay: 0.3, duration: 0.4 }} viewport={{ once: true }}>
    <div className="card-body">
      <h5>{name}</h5>
    </div>
    <div className="card-text">
      <p><i>Issure : {issuer}</i></p>
      <p><i>Year : {passout}</i></p>
    </div>
  </motion.div>
);



const hobbies = [
  { title: 'Cooking' },
  { title: 'Music' },
  { title: 'Yoga' },
];

const Hobby = ({ title }) => (
  <div className="card text-center mx-2 mb-4" style={{ minWidth: '200px', height: '180px' }}>
    <div className="card-body d-flex align-items-center justify-content-center">
      <h5 className="card-title mb-5">{title}</h5>
    </div>
  </div>
);




const aboutme={
    textAlign:'start',
    textIndent:'100px',
    padding:'30px',
    fontFamily:'sans-serif',
    boxShadow:'10px black',
    marginBottom:'100px'
    
}
const SkillCard = ({ name, level }) => (
  <motion.div className="col-md-4 mb-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
    <div className="card shadow-sm border-1">
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <div className="progress" style={{ height: '8px' }}>
          <motion.div
            className="progress-bar bg-purple"
            role="progressbar"
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <small className="text-muted mt-2 d-block">{level}%</small>
      </div>
    </div>
  </motion.div>
);

const AboutData = () => (  
  <div className="container py-5">
     <div className="text-2xl font-bold text-blue-600">
       <p className='card d-none d-md-block' style={aboutme}>I’m Krithika, a passionate and driven graduate with a Bachelor’s degree in Economics and a strong foundation in technology. I have successfully completed a comprehensive course in Java Full Stack Development, equipping me with hands-on experience in building dynamic web applications using modern frameworks and tools.
     During my academic journey, I had the opportunity to intern at the State Bank of India (SBI), where I gained valuable insights into financial operations and customer service. This experience, though brief, enhanced my understanding of the banking sector and strengthened my communication and analytical skills.
     I’m now eager to apply my interdisciplinary background—combining economics and software development—to contribute meaningfully to innovative projects. I thrive in collaborative environments and am always keen to learn and grow.
     </p>
      </div>
       <div className="block text-xl font-semibold text-green-600">
        <p className='d-block d-md-none card' style={aboutme}>I’m Krithika, an Economics graduate with a strong foundation in technology and a passion for web development. I’ve completed a comprehensive Java Full Stack Development course, gaining hands-on experience in building dynamic applications with modern tools. My internship at the State Bank of
           India provided valuable exposure to financial operations and customer service, enhancing my 
          communication and analytical skills. With an interdisciplinary background in economics and software development, I’m eager to contribute to innovative projects, thrive in collaborative environments, and continuously grow through learning.</p>
      </div>
     
    <h2 className="text-center mb-4"><i> My Skills</i></h2>
    <div className="row ">
      {skills.map((skill, index) => (
        <SkillCard key={index} name={skill.name} level={skill.level} />
      ))}

    <section>
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12">
          <h2 className='text-center'><i>Certification</i></h2>
          {certification.map((cerificate,index)=>(
            <Cerificate key={index} name={cerificate.name} issuer={cerificate.issuer} passout={cerificate.passout}/>
          ))}
        </div>
      
  <div className="col-md-6 col-sm-12">
    <h2><i>Hobbies</i></h2>
    <div className="scroll-container  py-3 px-2">
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <Hobby title={hobby.title} />
        </div>
      ))}
    </div>
  </div>
      </div>
    </section>

    </div>
     
   

     
      







 


  </div>
);

export default AboutData;