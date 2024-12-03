// src/App.js
import React from 'react';
import ProfileCard from './components/profilecard'; 
import './App.css'; 

const App = () => {
  const userDetails = {
    name: "Umar Farooq",
    age: 19,
    occupation: "Engineer",
    location: "Karachi",
  };

  return (
    <div className="app">
      <h1>Profile Information</h1>
      
      <ProfileCard
        name={userDetails.name}
        age={userDetails.age}
        occupation={userDetails.occupation}
        location={userDetails.location}
      />
    </div>
  );
};

export default App;
