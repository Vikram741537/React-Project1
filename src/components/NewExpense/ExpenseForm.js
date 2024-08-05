import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);

    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);

    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" value= {enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value= {enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" value= {enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense_actions"></div>
            <button type="submit">Add Expense</button>
        </form>
    )
}

export default ExpenseForm;