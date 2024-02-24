import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";

import React from "react";

const Expenses = (props) => {
  let expenses = props.expenses;
  const expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseItems.push(
      <ExpenseItems
        className={props.className}
        id={expense.id}
        title={expense.title}
        location={expense.location}
        amount={expense.amount}
        date={expense.date}
      />
    );
  }
  return <div className="expenses">{expenseItems}</div>;
};

export default Expenses;
