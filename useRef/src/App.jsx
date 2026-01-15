import { useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  const handleStart = () => {
    // prevent multiple intervals
    if (intervalId.current !== null) return;

    intervalId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setTime(0);
  };

  return (
    <>
      <h1>Stopwatch: {time}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
