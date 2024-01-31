import { useReducer } from "react";
import "../styles.css";
import OpenAccount from "./OpenAccount";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import RequestLoan from "./RequestLoan";
import PayLoan from "./PayLoan";
import CloseAccount from "./CloseAccount";

/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

export const DEPOSIT = "deposit";
export const WITHDRAW = "withdraw";
export const OPEN_ACCOUNT = "openAccount";
export const CLOSE_ACCOUNT = "closeAccount";
export const REQUEST_LOAN = "requestLoan";
export const PAY_LOAN = "payLoan";

function reducer(state, action) {
  switch (action.type) {
    case OPEN_ACCOUNT:
      return { ...initialState, isActive: true };
    case DEPOSIT:
      return { ...state, balance: state.balance + action.payload };
    case WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case REQUEST_LOAN:
      return {
        ...state,
        loan: state.loan + action.payload,
        balance: state.balance + action.payload,
      };
    case PAY_LOAN:
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case CLOSE_ACCOUNT:
      return initialState;
    default:
      throw new Error("Unknown Action");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <OpenAccount isActive={isActive} dispatch={dispatch} />
      <Deposit isActive={isActive} dispatch={dispatch} />
      <Withdraw isActive={isActive} dispatch={dispatch} balance={balance} />
      <RequestLoan isActive={isActive} dispatch={dispatch} />
      <PayLoan
        isActive={isActive}
        dispatch={dispatch}
        balance={balance}
        loan={loan}
      />
      <CloseAccount
        isActive={isActive}
        dispatch={dispatch}
        balance={balance}
        loan={loan}
      />
    </div>
  );
}
