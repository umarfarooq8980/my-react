import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setAge("");
  };

  return (
    <div>
      <h2>Login Form</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={ => setEmail}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={ => setPassword}
      />
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={ => setFullName}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={ => setAge}
      />
      <button onClick={clearForm}>Clear</button>
      <p>Details:</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Full Name: {fullName}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default LoginForm;

