import { CLOSE_ACCOUNT } from "./App";

function CloseAccount({ isActive, loan, balance, dispatch }) {
  const isDisabled = !(isActive && loan === 0 && balance === 0);

  return (
    <p>
      <button
        onClick={() => dispatch({ type: CLOSE_ACCOUNT })}
        disabled={isDisabled}
      >
        Close account
      </button>
    </p>
  );
}

export default CloseAccount;
