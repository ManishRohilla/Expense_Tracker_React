import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseHandler = (newExpense) => {
    props.onReceiveExpense(newExpense);
  };
  const [formToggle, setFormToggle] = useState(false);
  const handleFormToggle = () => {
    setFormToggle(true);
  };
  const handleCancelFormToggle = (turnTo) => {
    setFormToggle(turnTo);
  };
  return (
    <div className="new-expense">
      {formToggle ? (
        <ExpenseForm
          onSubmitForm={newExpenseHandler}
          onCancelForm={handleCancelFormToggle}
        />
      ) : (
        <button onClick={handleFormToggle}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
