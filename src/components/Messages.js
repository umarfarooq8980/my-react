import React from "react";

function Messages({ messages }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Messages</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {messages.map((message, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <p><strong>Message {index + 1}:</strong> {message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
