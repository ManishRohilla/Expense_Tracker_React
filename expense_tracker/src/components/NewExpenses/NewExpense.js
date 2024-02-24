import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseHandler = (newExpense) => {
    props.onReceiveExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;
