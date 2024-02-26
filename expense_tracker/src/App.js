import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

const Dummy_Data = [
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
  {
    id: 4,
    title: "Bike",
    location: "Bengaluru",
    amount: 500.45,
    date: new Date(2024, 3, 29),
  },
];
function App() {
  let [expenses, setExpense] = useState(Dummy_Data);
  const sendForLog = (newExpense) => {
    newExpense = {
      ...newExpense,
      id: expenses.length + 1,
      date: new Date(newExpense.date),
    };
    console.log("App", newExpense);
    setExpense((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
  };
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <NewExpense onReceiveExpense={sendForLog} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
