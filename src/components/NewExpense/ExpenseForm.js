import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 多个状态切片完成
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   只用一个状态完成
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // 多个状态切片的设置方法
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    // 确保是最新状态的快照，上面的方法有可能不是最新的
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // 多个状态切片的设置方法
    setEnteredAmount(event.target.value);

    // 一个状态的设置方法
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    //   });

    // 确保是最新状态的快照，上面的方法有可能不是最新的
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // 多个状态切片的设置方法
    setEnteredDate(event.target.value);

    // 一个状态的设置方法
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    //   });

    // 确保是最新状态的快照，上面的方法有可能不是最新的
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value};
    // });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
