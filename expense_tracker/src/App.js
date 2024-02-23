import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
