import React from "react";

function UserProfile({ userData }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <img
        src={userData.profilePicture}
        alt="Profile"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <div>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Role:</strong> {userData.role}</p>
      </div>
    </div>
  );
}

export default UserProfile;
