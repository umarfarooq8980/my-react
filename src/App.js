import React from "react";
import UserInfo from "./components/UserInfo";
import Statistics from "./components/Statistics";

function App() {
  // User Data Object
  const userData = {
    name: "Muhammad Umar Farooq ",
    email: "umaraalizai@gmail.com",
    role: "softwear engineer",
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
      <h1>Dashboard</h1>
      <UserInfo userData={userData} />
      <Statistics statistics={statistics} />
    </div>
  );
}

export default App;

