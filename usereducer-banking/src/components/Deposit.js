import { DEPOSIT } from "./App";

function handleDeposit(dispatch, amount) {
  dispatch({ type: DEPOSIT, payload: amount });
}

function Deposit({ isActive, dispatch }) {
  const isDisabled = isActive ? false : true;
  return (
    <p>
      <button
        onClick={() => handleDeposit(dispatch, 150)}
        disabled={isDisabled}
      >
        Deposit 150
      </button>
    </p>
  );
}

export default Deposit;
