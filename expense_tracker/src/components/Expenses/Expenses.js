import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");
  const handleYearFilter = (yearFilter) => {
    setFilteredYear(yearFilter);
  };

  let expenses = props.expenses;

  // Filter expenses based on the selected year
  if (filteredYear !== "All") {
    expenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  }
  let expensesContent;

  // Render expenses list or message based on the number of expenses
  if (expenses.length === 0) {
    expensesContent = (
      <h3 style={{ color: "white" }}>No Expenses to display....</h3>
    );
  } else if (expenses.length === 1) {
    expensesContent = (
      <>
        <ExpenseItems
          className={props.className}
          id={expenses[0].id}
          title={expenses[0].title}
          location={expenses[0].location}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <h3 style={{ color: "white" }}>
          Only single Expense here. Please add more....
        </h3>
      </>
    );
  } else {
    expensesContent = expenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        className={props.className}
        id={expense.id}
        title={expense.title}
        location={expense.location}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={handleYearFilter} />
        <ExpensesChart expenses={expenses} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
