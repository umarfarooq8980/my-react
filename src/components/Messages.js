import React from "react";

function Messages({ messages }) {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          <p><strong>From:</strong> {message.sender}</p>
          <p>{message.content}</p>
          <small>{message.timestamp}</small>
        </li>
      ))}
    </ul>
  );
}

export default Messages;
