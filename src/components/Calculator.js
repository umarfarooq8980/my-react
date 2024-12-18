import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={ => setNum1}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={ => setNum2}
      />
      <div>
        <button onClick={() => setResult(Number(num1) + Number(num2))}>Add</button>
        <button onClick={() => setResult(Number(num1) - Number(num2))}>Subtract</button>
        <button onClick={() => setResult(Number(num1) * Number(num2))}>Multiply</button>
        <button onClick={() => setResult(Number(num2) !== 0 ? Number(num1) / Number(num2) : "Error")}>
          Divide
        </button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
