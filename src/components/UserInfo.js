import React from "react";

function UserInfo({ userData }) {
  const roleColors = {
    Engineer: "green",
    Administrator: "blue",
    Manager: "orange",
    Guest: "gray",
  };

  const roleColor = roleColors[userData.role] || "black";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
      <img
        src={userData.profilePicture}
        alt="Profile"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <div>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p>
          <strong>Role:</strong>{" "}
          <span style={{ color: roleColor, fontWeight: "bold" }}>{userData.role}</span>
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
