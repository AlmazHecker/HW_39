import React from "react"
import './NewExpense.css';
import AddExpense from "./AddExpense";

const NewExpense = (props) => {
    const saveExpenseDataHundler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData)
    }

    return <div className='new-expense'>
        <AddExpense onSaveExpenseData={saveExpenseDataHundler}/>
    </div>
}

export default NewExpense;