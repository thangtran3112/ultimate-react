export default function Total({ bill, yourRate, friendRate }) {
  const parsedBill = Number(bill);
  const totalTip = Math.round((parsedBill * (yourRate + friendRate)) / 200);
  const totalBill = totalTip + parsedBill;

  return (
    <>
      <h4>
        You pay ${totalBill} (${parsedBill} + ${totalTip} tip)
      </h4>
    </>
  );
}
