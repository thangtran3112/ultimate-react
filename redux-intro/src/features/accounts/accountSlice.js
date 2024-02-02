import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

//State is mutable in @reduxjs/toolkit, instead of immutable state in Classic Redux
//We just need to modify state directly, without returning the mutated state back
//ActionCreators will only accept 1 argument
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.loanPurpose = "";
      state.balance -= state.loan;
      state.loan = 0;
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

//accountSlice.actions will contains all automatically created ActionCreators
export const { withdraw, requestLoan, payLoan, convertingCurrency } =
  accountSlice.actions;

//we need to remove the automatically deposit ActionCreator from previous export
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  //return a dispatch function instead. Redux know this is a side effect and sent to middleware instead
  //this async function is sitting between Dispatch and Reducer
  return async function (dispatch, getState) {
    //Maybe we can also use the previous dispatch:
    dispatch({ type: "account/convertingCurrency" });
    //dispatch(convertingCurrency());

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

export default accountSlice.reducer;

// //pure functions only, no side effects.
// //default of initialState at the beginning
// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       const newState = {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//       console.log(newState);
//       return newState;
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       //Redux recommends not throwing error, but return unchanged state
//       return state;
//   }
// }

// //this has become a middleware function
// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   //return a dispatch function instead. Redux know this is a side effect and sent to middleware instead
//   //this async function is sitting between Dispatch and Reducer
//   return async function (dispatch, getState) {
//     //Set Loading
//     dispatch({ type: "account/convertingCurrency" });

//     //API call
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;
//     //call the reducer
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount,
//       purpose,
//     },
//   };
// }

// export function payLoan() {
//   return {
//     type: "account/payLoan",
//   };
// }
