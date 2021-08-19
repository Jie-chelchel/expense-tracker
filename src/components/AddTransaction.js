import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTrans = { text, amount: +amount, id: Date.now() };
    addTransaction(newTrans);
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative-expense, positive -income
          </label>
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
