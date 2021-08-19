import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amountsArray = transactions.map((item) => item.amount);
  const balance = amountsArray
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1> {balance}</h1>
    </div>
  );
};
export default Balance;
