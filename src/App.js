import React from "react";
import UserProfile from "./components/UserProfile";
import Statistics from "./components/Statistics";


function App() {
  const userData = {
    name: "Umar Farooq",
    email: "mfarooqalizai@gmail.com",
    role: "Engineer",
    profilePicture: "https://via.placeholder.com/150",
  };

  const statistics = {
    totalUsers: 54,
    activeUsers: 45,
    newSignups: 10,
    activePercentage: ((45 / 54) * 100).toFixed(2),
  };



  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Profile</h1>
      <UserProfile userData={userData} />
      
      <h2>Statistics</h2>
      <Statistics statistics={statistics} />
      
      
    </div>
  );
}

export default App;

