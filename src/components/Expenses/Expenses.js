import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
  return (
    <div>
      <ExpensesFilter />
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
    </div>
  );
};

export default Expenses;
