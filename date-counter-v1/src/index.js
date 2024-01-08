import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import "./style.css";
import moment from "moment";

//Only use State on components, which requires re-rendering
function App() {
  const todayDate = moment().format("D-MM-YYYY");

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(todayDate);

  function changeDate() {
    const numberOfDayChanges = step * count;
    const newDate = moment()
      .add(numberOfDayChanges, "days")
      .format("D-MM-YYYY");
    setDate(() => newDate);
  }

  function plusStep() {
    setStep((s) => s + 1);
  }

  function minusStep() {
    setStep((s) => s - 1);
  }

  function plusCount() {
    setCount((c) => c + 1);
  }

  function minusCount() {
    setCount((c) => c - 1);
  }

  function Step() {
    return (
      <div>
        <button onClick={minusStep}>-</button>
        <span> Step: {step} </span>
        <button onClick={plusStep}>+</button>
      </div>
    );
  }

  function Count() {
    return (
      <div>
        <button onClick={minusCount}>-</button>
        <span> Count: {count} </span>
        <button onClick={plusCount}>+</button>
      </div>
    );
  }

  function Banner() {
    const dayChanges = step * count;
    changeDate();
    return (
      <>
        <span>
          {dayChanges >= 0
            ? `${dayChanges} days from now is: `
            : `${Math.abs(dayChanges)} days ago was: `}
        </span>
        <span>{date}</span>
      </>
    );
  }

  return (
    <div className="App">
      <Step />
      <Count />
      <Banner />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
