import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";
import "./app.css";

function App() {
  const [busData, setBusData] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [refreshIframe, setRefreshIframe] = useState(0);

  useEffect(() => {
    if (timeLeft !== 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      setTimeLeft(10);
      const data = fetch("https://www.nextbuses.sg/api.php?stop=21591", {
        method: "GET",
        mode: "no-cors",
        headers: {},
      }).then((res) => {
        // setBusData(res);
        console.log(res);
        setRefreshIframe(refreshIframe + 1);
      });
    }
  }, [timeLeft]);

  return (
    <div className="App">
      <div className="time-text">
        <Clock format="HH:mm:ss" interval={1000} ticking={true} />
      </div>
      <div>Reset in {timeLeft}</div>
      <div>{busData}</div>
      <iframe
        width="100%"
        hey={refreshIframe}
        src="https://www.nextbuses.sg/api.php?stop=21591"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
    </div>
  );
}

export default App;
