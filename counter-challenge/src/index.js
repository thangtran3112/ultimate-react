import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import "./style.css";
import moment from "moment";

//Only use State on components, which requires re-rendering
function App() {
  const todayDate = moment().format("D-MM-YYYY");

  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(1);
  const [date, setDate] = useState(todayDate);

  function changeDate() {
    const numberOfDayChanges = step * counter;
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

  function plusCounter() {
    setCounter((c) => c + 1);
  }

  function minusCounter() {
    setCounter((c) => c - 1);
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

  function Counter() {
    return (
      <div>
        <button onClick={minusCounter}>-</button>
        <span> Counter: {counter} </span>
        <button onClick={plusCounter}>+</button>
      </div>
    );
  }

  function Banner() {
    const dayChanges = step * counter;
    changeDate();
    return (
      <>
        <span>
          {dayChanges >= 0
            ? `${dayChanges} days from now is: `
            : `${dayChanges} days ago was: `}
        </span>
        <span>{date}</span>
      </>
    );
  }

  return (
    <div className="App">
      <Step />
      <Counter />
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
