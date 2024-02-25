import React from "react";
import "./ExpenseItems.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItems = (props) => {
  const deleteExpense = () => {
    const expenseItem = document.getElementById(`expense-${props.id}`);
    if (expenseItem) {
      expenseItem.remove();
    }
  };
  return (
    <Card className="expense-item" id={`expense-${props.id}`}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        price={props.amount}
      />
      <button onClick={deleteExpense} className="delete-button">
        Delete
      </button>
    </Card>
  );
};

export default ExpenseItems;
