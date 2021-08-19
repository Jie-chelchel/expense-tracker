import { GlobalContext } from "../context/GlobalState";
import React, { useContext } from "react";
// import { transformSync } from "@babel/core";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div className="history">
      <h3> History</h3>
      <ul>
        {transactions.map((item) => {
          return <Transaction item={item} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
