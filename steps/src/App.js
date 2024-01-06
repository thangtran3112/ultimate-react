import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

/*
Can only put useState() at the beginning of a react function component 
Can not put useState() under a conditional if statement
*/
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //cannot put useState inside a supporting function, which is not a React component
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  /**Javascript mode {} can only be done inside some elements
   * https://www.geeksforgeeks.org/what-is-the-difference-between-and-in-reactjs/
   * {} will be used when evaluate multiple javascript statements, such as conditional rendering
   * () will be used for a piece of code, which returns a value
   */
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          {/*
            Do not use onClick={handlePrevious()} 
            it will call the function immediately when page loads,
            must use onClick={handlePrevious} to pass a callback to Event only
          */}
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            {/*
              Second option is to use () => handleNext()
            */}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
