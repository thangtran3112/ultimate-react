import { useEffect, useState } from "react";

const currencies = ["USD", "EUR", "CAD", "INR"];

function Loader() {
  return <span className="loader">Loading...</span>;
}

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
export default function App() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("100");

  const handleChangeAmount = (newAmount) => {
    setAmount(() => newAmount);
  };

  const handleFromCurrency = (currency) => {
    setFromCurrency(() => currency);
  };

  const handleToCurrency = (currency) => {
    setToCurrency(() => currency);
  };

  useEffect(() => {
    const controller = new AbortController();

    async function convertCurrency() {
      if (toCurrency === fromCurrency) {
        setOutput(`${amount}`);
        return;
      }
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching currency api");

        const data = await res.json();
        console.log(data);
        setOutput(data.rates[`${toCurrency}`]);
      } catch (err) {
        if (err.name !== "AbortError") {
          setOutput("Something wrong with your request");
        }
      } finally {
        setIsLoading(false);
      }
    }

    convertCurrency();

    //return clean up function
    return () => {
      controller.abort();
    };
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => handleChangeAmount(Number(e.target.value))}
      />
      <select
        value={fromCurrency}
        onChange={(e) => handleFromCurrency(e.target.value)}
      >
        {currencies.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
      <select
        value={toCurrency}
        onChange={(e) => handleToCurrency(e.target.value)}
      >
        {currencies.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
      <p>{isLoading ? <Loader /> : output}</p>
    </div>
  );
}
