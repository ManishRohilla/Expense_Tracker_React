import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";

import React from "react";

const Expenses = (props) => {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      location: "Bengaluru",
      amount: 214.44,
      date: new Date(2022, 1, 22),
    },
    {
      id: 2,
      title: "Hotel",
      location: "Kolkata",
      amount: 300.67,
      date: new Date(2021, 2, 20),
    },
    {
      id: 3,
      title: "Flight Tickets",
      location: "Bengaluru",
      amount: 100.45,
      date: new Date(2024, 2, 29),
    },
  ];
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
