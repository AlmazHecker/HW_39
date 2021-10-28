import React, { useState } from "react"
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    // console.log(props);
    //{onSaveExpenseData: () => {} } 
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let data = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(data);

        setTitle('');
        setAmount('');
        setDate('');

    }

    const [num, setNum] = useState(0)

    function Plus(){
        setNum(pred => pred + 1)
    }

    function Minus(){
        setNum(pred => pred - 1)
    }

    return (
        <div>

    <div className={num ? 'delete' : ''}>

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                        />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                        
                        />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2021-01-01"
                        max="2022-12-21"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                        />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={Plus}>Cancel</button>
                <button type="submit" onClick={Plus}>Add Expense</button>
            </div>
        </form>

    </div>
        {
            num ? <button onClick={Minus}>Add New Expense</button> : ''
        }
    </div>

)
}

export default ExpenseForm;