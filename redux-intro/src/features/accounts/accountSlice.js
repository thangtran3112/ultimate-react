const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// const ACCOUNT_DEPOSIT = "account/deposit";

//pure functions only, no side effects.
//default of initialState at the beginning
export default function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case "account/deposit":
      const newState = {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
      console.log(newState);
      return newState;
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      //Redux recommends not throwing error, but return unchanged state
      return state;
  }
}

//this has become a middleware function
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  //return a dispatch function instead. Redux know this is a side effect and sent to middleware instead
  return async function (dispatch, getState) {
    //Set Loading
    dispatch({ type: "account/convertingCurrency" });

    //API call
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    //call the reducer
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}

export function payLoan() {
  return {
    type: "account/payLoan",
  };
}
