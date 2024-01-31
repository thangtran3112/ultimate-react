import { WITHDRAW } from "./App";

function handleWithdraw(dispatch, amount) {
  dispatch({ type: WITHDRAW, payload: amount });
}

function Withdraw({ isActive, dispatch, balance }) {
  const isDisabled = !(isActive && balance >= 50);
  return (
    <p>
      <button
        onClick={() => handleWithdraw(dispatch, 50)}
        disabled={isDisabled}
      >
        Withdraw 50
      </button>
    </p>
  );
}

export default Withdraw;
