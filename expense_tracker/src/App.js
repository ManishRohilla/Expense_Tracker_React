import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import ExpenseForm from "./components/NewExpenses/ExpenseForm";

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseForm />
      <Expenses />
    </div>
  );
}

export default App;
