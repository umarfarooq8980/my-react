import React from "react";

function Statistics({ statistics }) {
  return (
    <ul>
      <li><strong>Total Users:</strong> {statistics.totalUsers}</li>
      <li><strong>Active Users:</strong> {statistics.activeUsers}</li>
      <li><strong>New Signups:</strong> {statistics.newSignups}</li>
      <li><strong>Active Percentage:</strong> {statistics.activePercentage}%</li>
    </ul>
  );
}

export default Statistics;
