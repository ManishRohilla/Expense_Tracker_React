import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  let currentDate = new Date().toJSON().slice(0, 10);
  const [expenseData, setExpenseData] = useState({
    id: "",
    title: "",
    location: "",
    amount: "",
    date: "",
  });
  // const titleChangeHandler = (event) => {
  // setEnteredTitle(event.target.value);
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });
  // };
  const dataChangeHandler = (event) => {
    const { name, value } = event.target;

    setExpenseData({ ...expenseData, [name]: value });
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const handleFormToggleCancel = (event) => {
    props.onCancelForm(false);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(expenseData);
    props.onSubmitForm(expenseData);
    setExpenseData({
      id: "",
      title: "",
      location: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler} onReset={handleFormToggleCancel}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expenseData.title}
            onChange={dataChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={expenseData.location}
            onChange={dataChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={expenseData.amount}
            onChange={dataChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={currentDate}
            name="date"
            value={expenseData.date}
            onChange={dataChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
