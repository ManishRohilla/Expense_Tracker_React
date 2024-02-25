import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  let selectedYear = "All";
  const handleSelectedYear = (event) => {
    selectedYear = event.target.value;
    props.selectedYear(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select defaultValue={selectedYear} onChange={handleSelectedYear}>
          <option value="All">All</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
