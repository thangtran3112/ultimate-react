export default function Reset({ onSetBill, onSetYourRate, onSetFriendRate }) {
  return (
    <button
      className="button"
      onClick={() => {
        onSetBill(0);
        onSetYourRate(10);
        onSetFriendRate(10);
      }}
    >
      Reset
    </button>
  );
}
