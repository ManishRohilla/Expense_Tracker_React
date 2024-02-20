import React from "react";
import "./ExpenseItems.css";
import "./ExpenseDetails";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItems = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div className="expense-item">
        <div>
          {month}-{day}-{year}
        </div>
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
