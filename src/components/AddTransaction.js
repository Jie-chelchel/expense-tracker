import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      alert("Please add text and amount.");
      return "";
    }
    const newTrans = { text, amount: +amount, id: Date.now() };
    addTransaction(newTrans);
    setText("");
    setAmount("");
  };

  return (
    <div className="trans">
      <h3 className="newTrans">Add new transaction</h3>
      <form>
        <div className="newTrans">
          <label htmlFor="text">Text </label>
          <input
            type="text"
            placeholder="Income or expenses"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="newTrans">
          <label htmlFor="amount">
            Amount <br />
            (negative-expense, positive -income)
          </label>
          <br />
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button onClick={onSubmit}>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
