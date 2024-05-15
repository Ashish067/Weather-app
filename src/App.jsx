import React from "react";
import Weather from "./components/Weather";
import bg from "../src/assets/bg.jpg";

const App = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        className="w-screen h-screen flex justify-center items-center"
      >
        <Weather />
      </div>
    </>
  );
};

export default App;
