import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = ({ item }) => {
  if (item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      <ExpenseItem expenseItem={item}></ExpenseItem>;
    </ul>
  );
};

export default ExpensesList;
