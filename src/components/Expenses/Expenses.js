import React from "react";
import './Expenses.css'
import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card.js';


const Expenses = (props) => {
    return(
        <Card className='expenses'>
            {
                props.item.map(
                    expense =>(
                        <ExpenseItem 
        date={expense.date} 
        title={expense.title} 
        amount={expense.amount} />
                    )
                )
            }
        
        </Card>
    )
}

export default Expenses;