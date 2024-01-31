import { OPEN_ACCOUNT } from "./App";

function OpenAccount({ dispatch, isActive }) {
  //if account is already active, do not open a new one
  const isDisabled = isActive;
  return (
    <p>
      <button
        onClick={() => dispatch({ type: OPEN_ACCOUNT })}
        disabled={isDisabled}
      >
        Open account
      </button>
    </p>
  );
}

export default OpenAccount;
