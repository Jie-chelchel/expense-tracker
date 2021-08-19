import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.item.amount > 0 ? "+" : "-";
  return (
    <li>
      {props.item.text}
      <span>
        {sign}${Math.abs(props.item.amount)}
      </span>
      <button onClick={() => deleteTransaction(props.item.id)}>x</button>
    </li>
  );
};

export default Transaction;
