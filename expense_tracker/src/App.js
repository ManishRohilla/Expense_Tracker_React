import ExpenseItems from "./components/ExpenseItems";
import "./App.css";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      location: "Bengaluru",
      amount: 214.44,
      date: new Date(22, 4, 2021),
    },
    {
      title: "Hotel",
      location: "Kolkata",
      amount: 300.67,
      date: new Date(22, 2, 2024),
    },
    {
      title: "Flight Tickets",
      location: "Bengaluru",
      amount: 100.45,
      date: new Date(29, 2, 2024),
    },
  ];
  const expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseItems.push(
      <ExpenseItems
        title={expense.title}
        location={expense.location}
        amount={expense.amount}
        date={expense.date}
      />
    );
  }
  return (
    <div>
      <h2>Expense Tracker</h2>
      {expenseItems}
    </div>
  );
}

export default App;
