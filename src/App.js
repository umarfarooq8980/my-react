import React from "react";
import UserInfo from "./components/UserInfo";
import Statistics from "./components/Statistics";
import Messages from "./components/Messages";

function App() {
  
  const userData = {
    name: "Muhammad Umar Farooq",
    email: "mfarooqalizai@gmail.com",
    role: "Student",
    profilePicture: "https://miu.edu.ng/wp-content/uploads/2021/06/AdobeStock_113096046.jpg", // Placeholder for profile image
  };

  
  const statistics = {
    totalUsers: 100,
    activeUsers: 65,
    newSignups: 15,
    activePercentage: ((45 / 54) * 100).toFixed(2), 
  };

 
  const messages = [
    "Welcome To The GU TECH Karachi!",
    "Now we are Available.",
    "Good and Enjoy!",
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dashboard</h1>
      <UserInfo userData={userData} />
      <Statistics statistics={statistics} />
      <Messages messages={messages} />
    </div>
  );
}

export default App;
