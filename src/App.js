import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./form";

// bg-gradient-to-br from-[#8600b2] to-[#9a04cd]
export default function App() {
  return (
    <div className="App mx-auto md:max-w-6xl md:px-20 pt-4 px-3 ">
      <React.StrictMode>
        <Form />
      </React.StrictMode>
    </div>
  );
}
