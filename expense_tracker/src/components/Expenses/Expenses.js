import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const expenseItems = [];
  const [filteredYear, setFilteredYear] = useState("All");

  const handleYearFilter = (yearFilter) => {
    setFilteredYear(yearFilter);
    console.log("up", yearFilter);
  };

  let expenses = props.expenses;

  // Filter expenses based on the selected year
  if (filteredYear !== "All") {
    expenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  }
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseItems.push(
      <ExpenseItems
        key={expense.id}
        className={props.className}
        id={expense.id}
        title={expense.title}
        location={expense.location}
        amount={expense.amount}
        date={expense.date}
      />
    );
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={handleYearFilter} />
        {expenseItems}
      </Card>
    </div>
  );
};

export default Expenses;
