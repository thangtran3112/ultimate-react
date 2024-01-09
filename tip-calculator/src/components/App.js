import { useState } from "react";
import "../style.css";
import Bill from "./Bill";
import Reset from "./Reset";
import TipPercentage from "./TipPercentage";
import Total from "./Total";

export default function App() {
  const [bill, setBill] = useState(0);
  const [yourRate, setYourRate] = useState(10);
  const [friendRate, setFriendRate] = useState(10);

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <TipPercentage rate={yourRate} onSetRate={setYourRate}>
        <span>How did you like the service?</span>
      </TipPercentage>
      <TipPercentage rate={friendRate} onSetRate={setFriendRate}>
        <span>How did your friend like the service?</span>
      </TipPercentage>
      <Total bill={bill} yourRate={yourRate} friendRate={friendRate}></Total>
      <Reset
        onSetBill={setBill}
        onSetYourRate={setYourRate}
        onSetFriendRate={setFriendRate}
      ></Reset>
    </div>
  );
}
