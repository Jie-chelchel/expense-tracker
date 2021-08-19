import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.item.amount > 0 ? "+" : "-";
  return (
    <li>
      <h2>{props.item.text}</h2>
      <span>
        {sign}${Math.abs(props.item.amount)}
      </span>
      <button onClick={() => deleteTransaction(props.item.id)}>delete</button>
    </li>
  );
};

export default Transaction;
