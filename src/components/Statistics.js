import React from "react";

function Statistics({ statistics }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li><strong>Total Users:</strong> {statistics.totalUsers}</li>
        <li><strong>Active Users:</strong> {statistics.activeUsers}</li>
        <li><strong>New Signups:</strong> {statistics.newSignups}</li>
      </ul>
      <div style={{ marginTop: "10px" }}>
        <strong>Active Percentage:</strong>
        <div
          style={{
            background: "#ddd",
            borderRadius: "5px",
            overflow: "hidden",
            width: "100%",
            height: "20px",
            marginTop: "5px",
          }}
        >
          <div
            style={{
              background: "green",
              width: `${statistics.activePercentage}%`,
              height: "100%",
            }}
          />
        </div>
        <p>{statistics.activePercentage}%</p>
      </div>
    </div>
  );
}

export default Statistics;
