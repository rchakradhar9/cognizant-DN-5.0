import React from "react";
import Counter from "./Counter";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Counter />

      <br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;