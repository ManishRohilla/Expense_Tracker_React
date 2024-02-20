import React from "react";
import "./ExpenseItems.css";
import "./ExpenseDetails";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
const ExpenseItems = (props) => {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          location={props.location}
          price={props.amount}
        />
      </div>
    </div>
  );
};

export default ExpenseItems;
