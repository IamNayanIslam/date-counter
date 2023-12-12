import { useState } from "react";
import "./DateCounter.css";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepUp = () => {
    setStep((s) => s + 1);
  };

  const stepDown = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const countUp = () => {
    setCount((c) => c + step);
  };

  const countDown = () => {
    setCount((c) => c - step);
  };

  const date = new Date();

  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="app">
        <div>
          <button onClick={stepDown}>-</button>
          Step: {step}
          <button onClick={stepUp}>+</button>
        </div>
        <div>
          <button onClick={countDown}>-</button>
          Count: {count}
          <button onClick={countUp}>+</button>
        </div>
        <div>
          <p>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${count} days ago was `}
            </span>
            <span style={{ fontWeight: "bold" }}>{date.toDateString()}</span>
          </p>
        </div>
      </div>
    </>
  );
}
