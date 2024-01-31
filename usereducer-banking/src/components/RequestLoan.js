import { REQUEST_LOAN } from "./App";

function handleRequestLoan(dispatch, amount) {
  dispatch({ type: REQUEST_LOAN, payload: amount });
}

function RequestLoan({ isActive, dispatch }) {
  return (
    <p>
      <button
        onClick={() => handleRequestLoan(dispatch, 5000)}
        disabled={!isActive}
      >
        Request a loan of 5000
      </button>
    </p>
  );
}

export default RequestLoan;
