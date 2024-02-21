import React, { useState } from "react";
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
  const [title, setTitle] = useState(props.title);
  const updateTitle = () => {
    const titleNew = "Updated!";
    setTitle(titleNew);
    console.log(title);
  };
  const [price, setPrice] = useState(props.amount);
  const updatePrice = () => {
    const priceNew = "100";
    setPrice(priceNew);
    console.log(price);
  };
  return (
    <Card className="expense-item" id={`expense-${props.id}`}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} location={props.location} price={price} />
      <button onClick={deleteExpense} className="delete-button">
        Delete
      </button>
      <button onClick={updateTitle} className="title-button">
        Change Title
      </button>
      <button onClick={updatePrice} className="price-button">
        Change Price
      </button>
    </Card>
  );
};

export default ExpenseItems;
