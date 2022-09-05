import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: '294.67',
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: '294.67',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e3',
      title: 'New Desk',
      amount: '294.67',
      date: new Date(2001, 5, 12),
    },
    {
      id: 'e3',
      title: 'New Desk',
      amount: '222.67',
      date: new Date(2021, 3, 12),
    },
  ];
  const [expenseList, setExpenseList] = useState(expenses);
  const addExpenseHandler = (expense) => {
    // This is not correct way to update state bzu here it depends upon previous state snapshot so for that we use funtion to update
    //setExpenseList([expense, ...expenseList]);
    setExpenseList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenseList}></Expenses>
    </div>
  );
};

export default App;
