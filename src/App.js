import "./App.module.jsx";
import "antd/dist/antd.css";
import Inputfield from "./reusables/Inputfield.jsx";
import React from "react";

function App() {
  const [value, setValue] = React.useState("");
  return (
    <div style={{ width: "50%", margin: "10% auto" }}>
      <Inputfield data-testid="input1" onChange={(e) => setValue(e.target.event)} />
      <h1 data-testid="valueComp" style={{ color: "red" }}>{value}</h1>
    </div>
  );
}

export default App;
