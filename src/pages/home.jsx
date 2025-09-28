import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 // 👈 We'll define custom styles here

const hobbies = [
  { title: 'Cooking' },
  { title: 'Music' },
  { title: 'Yoga' },
];

const Hobby = ({ title }) => (
  <div className="card text-center mx-2" style={{ minWidth: '250px', height: '180px' }}>
    <div className="card-body d-flex align-items-center justify-content-center">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

const HobbiesScrollBox = () => (
  <div className="col-md-6 col-sm-12">
    <h2><i>Hobbies</i></h2>
    <div className="scroll-container d-flex py-3 px-2">
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <Hobby title={hobby.title} />
        </div>
      ))}
    </div>
  </div>
);

export default HobbiesScrollBox;