import React from "react";
import Clock from "react-live-clock";

function App() {
  return (
    <div className="App">
      <h1>
        <Clock format="HH:mm:ss" interval={1000} ticking={true} />
      </h1>
    </div>
  );
}

export default App;
