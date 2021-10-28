import React, { useState } from 'react';
import styles from './CourseInput.module.css'

import Button from '../../UI/Button/Button';

// TODO: props придут с app.js
const CourseInput = props => {
  
  // состояние чтобы сохранять значение input'a
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, SetIsValid] = useState(true)

  // функция которая будет записывать в enteredValue значение input'a 
  const goalInputChangeHandler = e => {
    if(e.target.value.trim().length > 0){
      SetIsValid(true)
    }
    setEnteredValue(e.target.value);
  };

  // срабатывает при нажатии на button
  const formSubmitHandler = e => {
    // останавливаем перезагрузку сайта
    e.preventDefault();
    if(enteredValue.trim().length === 0){
      SetIsValid(false)
      return;
    }
    // TODO: добавляем в DAT'у значение input'a
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']}  ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
          {/* onChange={GoalInputChangeHandler} TODO: см. 13 строку */}
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
