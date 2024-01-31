import { PAY_LOAN } from "./App";

function PayLoan({ dispatch, balance, loan, isActive }) {
  const isDisabled = !(isActive && loan > 0 && balance >= loan);

  return (
    <p>
      <button
        onClick={() => dispatch({ type: PAY_LOAN })}
        disabled={isDisabled}
      >
        Pay loan
      </button>
    </p>
  );
}

export default PayLoan;
