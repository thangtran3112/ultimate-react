export const DISSATISFIED = "Dissatisfied (0%)";
export const OKAY = "It was okay (5%)";
export const GOOD = "It was good (10%)";
export const AMAZING = "Absolutely amazing (20%)";

export const tipRatesMap = new Map([
  [0, DISSATISFIED],
  [5, OKAY],
  [10, GOOD],
  [20, AMAZING],
]);

export default function TipPercentage({ rate, onSetRate, children }) {
  function TipSelect() {
    return (
      <select value={rate} onChange={(e) => onSetRate(Number(e.target.value))}>
        {Array.from(tipRatesMap.keys()).map((key) => (
          <option value={key}>{tipRatesMap.get(key)}</option>
        ))}
      </select>
    );
  }

  return (
    <div>
      {children}
      <TipSelect></TipSelect>
    </div>
  );
}
