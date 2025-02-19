import React, {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';

const ExpenseItem = (props) => {
    // const [newTitle, setNewTitle] = useState('');

    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () =>{
    //     setTitle(newTitle)
    // }
    // const onChangeHandler = (event) =>{
    //     setNewTitle(event.target.value)
     //}
     return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>${props.amount}</div>
            </div>
            {/* <input type='text' value={newTitle} onChange={onChangeHandler}/>
            <button onClick={clickHandler}>Change Title</button> */}
        </Card>
     )
}
export default ExpenseItem;