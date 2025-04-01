"use client";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "AC",
  ];

  function handleButtonClick(value) {
    if (value === "=") {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error) {
        setResult("error");
      }
    } else if (value === "AC") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <input
          type="text"
          className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-4xl font-bold mb-4 focus-outline"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn, idx) => (
            <button
              onClick={() => handleButtonClick(btn)}
              key={idx}
              className="text-4xl bg-gray-300 hover:bg-gray-400 p-2 rounded-lg cursor-pointer"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
