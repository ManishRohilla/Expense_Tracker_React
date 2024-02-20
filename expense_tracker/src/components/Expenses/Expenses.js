import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";

import React from "react";

const Expenses = () => {
  const expenses = [
    {
      title: "Car Insurance",
      location: "Bengaluru",
      amount: 214.44,
      date: new Date(2022, 1, 22),
    },
    {
      title: "Hotel",
      location: "Kolkata",
      amount: 300.67,
      date: new Date(2021, 2, 20),
    },
    {
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