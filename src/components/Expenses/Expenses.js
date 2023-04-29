import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {/* 2. 利用JS特点的做法
        JS会在&&前的内容判断为真之后，直接执行&&后面的内容 */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        { filteredExpenses > 0 && filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id} //很重要，可以让React Dom是识别唯一需要更新的项，每次加上就好
              title={item.title}
              amount={item.amount}
              date={item.date}
              />
        ))} */}
        {/* 1. 传统三元式做法 */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id} //很重要，可以让React Dom是识别唯一需要更新的项，每次加上就好
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )} */}

        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
