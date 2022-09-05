import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = ({ expenseItem }) => {
  return (
    <li>
      {expenseItem.map((item) => (
        <Card key={item.id} className="expense-item">
          <ExpenseDate date={item.date} />
          <div className="expense-item__description">
            <h2>{item.title}</h2>
            <div className="expense-item__price">${item.amount}</div>
          </div>
        </Card>
      ))}
    </li>
  );
};

export default ExpenseItem;
