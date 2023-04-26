import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 4),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 4),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 4),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 4),
    },
    {
      id: "e5",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 4),
    },
  ];

  return (
    <div>
      <h1>Get start!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
