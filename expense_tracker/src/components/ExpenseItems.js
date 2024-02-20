import React from "react";
import "./ExpenseItems.css";
const ExpenseItems = (props) => {
  return (
    <div>
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <h2>{props.location}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItems;
