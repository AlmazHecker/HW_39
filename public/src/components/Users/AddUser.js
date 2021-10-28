import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }

        if(+enteredAge < 1){
            return;
        }
        setEnteredAge('');
        setEnteredUsername('');
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor='username'>username</label>
            <input 
            id='username'
             type='text'
             onChange={usernameChangeHandler}
             value={enteredUsername}
             />

             <label htmlFor='age'>Age(years)</label>
             <input id='age'
             type='number'
             onChange={ageChangeHandler}
             vlaue={enteredAge}
             />

             <Button type="submit">Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser;