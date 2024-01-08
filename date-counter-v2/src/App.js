import { useState } from "react";
import "./style.css";
import moment from "../node_modules/moment/moment";

export default function App() {
  const DATE_FORMAT = "DD-MM-YYYY";
  const todayDate = moment().format(DATE_FORMAT);

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(todayDate);

  function changeDate() {
    const numberOfDayChanges = step * count;
    const newDate = moment()
      .add(numberOfDayChanges, "days")
      .format(DATE_FORMAT);
    setDate(() => newDate);
  }

  /**
   * @param {{ target: { value: any; }; }} e
   */
  function updateStep(e) {
    setStep(() => Number(e.target.value));
  }

  function plusCount() {
    setCount((c) => c + 1);
  }

  function minusCount() {
    setCount((c) => c - 1);
  }

  function resetStates() {
    setCount(() => 1);
    setStep(() => 1);
  }

  function Step() {
    return (
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={`${step}`}
          onChange={updateStep}
        />
        <span>{step}</span>
      </div>
    );
  }

  function Count() {
    return (
      <div>
        <button onClick={minusCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={plusCount}>+</button>
      </div>
    );
  }

  function Banner() {
    const dayChanges = step * count;
    changeDate();
    return (
      <div>
        <p>
          {dayChanges === 0 ? "Today is: " : ""}
          {dayChanges > 0 ? `${dayChanges} days from now is: ` : ""}
          {dayChanges < 0 ? `${Math.abs(dayChanges)} days ago was: ` : ""}
          {date}
        </p>
      </div>
    );
  }

  function Reset() {
    return (
      <div>
        <button onClick={resetStates}>Reset</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Step />
      <Count />
      <Banner />
      <Reset />
    </div>
  );
}
