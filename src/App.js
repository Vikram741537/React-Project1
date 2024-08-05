import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
let DUMMY_EXPENSE = [
    {
        id:'e1',
        title:'School Fee',
        amount:'250',
        date: new Date(2021, 5, 12)
    },
    {
        id:'e2',
        title:'Grocery',
        amount:'150',
        date: new Date(2021, 3, 12)
    },
    {
        id:'e3',
        title:'Books',
        amount:'230',
        date: new Date(2021, 2, 12)
    },
    {
        id:'e4',
        title:'House Rent',
        amount:'700',
        date: new Date(2021, 6, 12)
    }
]
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE)
    const addExpenseHandler = (expense) =>{
        const updatedExpense = [expense, ...expenses]
      setExpenses(updatedExpense)
    }
    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler} />
            <Expenses item = {expenses}/>
        </div>
    );
}

export default App;