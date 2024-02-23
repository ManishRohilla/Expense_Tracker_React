import React from "react";
import "./ExpensesForm.css";
const ExpenseForm = () => {
  const handleTitle = (event) => {
    console.log(event.target.value);
  };
  const handleAmount = (event) => {
    console.log(event.target.value);
  };
  const handleLocation = (event) => {
    console.log(event.target.value);
  };
  const handleDate = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="expense_form">
      <div className="input-container">
        <label htmlFor="expense_title">Expense Title: </label>
        <input
          id="expense_title"
          name="expense_title"
          type="text"
          onChange={handleTitle}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="expense_amount">Expense Amount: </label>
        <input
          id="expense_amount"
          name="expense_amount"
          type="number"
          onChange={handleAmount}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="expense_location">Expense Location: </label>
        <input
          id="expense_location"
          name="expense_location"
          type="text"
          onChange={handleLocation}
        ></input>
      </div>
      <div className="input-container">
        <label htmlFor="expense_date">Expense Date: </label>
        <input
          id="expense_date"
          name="expense_date"
          type="date"
          onChange={handleDate}
        ></input>
      </div>
      <button type="submit">Log Expense</button>
    </div>
  );
};
export default ExpenseForm;
