import React from "react";
import "./ExpenseItems.css";

const date = "22-Feb-2024";
const expenseDetails = "Car Insurance";
const LocationOfExpenditure = "Bengaluru";
const expensePrice = 224.5;
const ExpenseItems = () => {
  return (
    <div>
      <h2>Expenses</h2>
      <div className="expense-item">
        <div>{date}</div>
        <div className="expense-item__description">
          <h2>{expenseDetails}</h2>
          <h2>{LocationOfExpenditure}</h2>
          <div className="expense-item__price">${expensePrice}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItems;
