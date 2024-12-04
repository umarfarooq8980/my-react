import React from "react";
import UserProfile from "./components/UserProfile";
import Statistics from "./components/Statistics";
import Messages from "./components/Messages";

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

  const messages = [
    { id: 1, sender: "Admin", content: "Welcome Umar, glad to have you on board!", timestamp: "2024-12-04 10:00 AM" },
    { id: 2, sender: "System", content: "Your account has been successfully verified.", timestamp: "2024-12-03 5:30 PM" },
    { id: 3, sender: "Team", content: "Please update your profile details.", timestamp: "2024-12-02 2:15 PM" },
  ];

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

