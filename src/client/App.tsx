import React from "react";
import LineGraph from "./LineGraph";

const onSpace = () => {
  console.log("Called");
};

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" onMouseUp={(event) => {
      onSpace();
      console.log(event);
    }}>
      <LineGraph />
    </div>
  );
};

export default App;
