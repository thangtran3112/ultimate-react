export default function Bill({ bill, onSetBill }) {
  return (
    <>
      <span>How much was the bill ?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </>
  );
}
