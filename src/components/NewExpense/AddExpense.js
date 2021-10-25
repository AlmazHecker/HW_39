import './AddExpense.css'
import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'

function AddExpense(props){
    const [num, setNum] = useState(0)

    function Plus(){
        setNum(pred => pred = true)
    }



    return(
        <div>
            <button onClick={Plus} className={num ? 'deleted' : ''}>Add New Expense</button>
            {
                num ? <ExpenseForm onSaveExpenseData={props.onSaveExpenseData}/> : ''
            }

        </div>
    )
}

export default AddExpense;