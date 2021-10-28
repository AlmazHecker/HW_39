import React, { useState } from 'react';
// TODO: модульный css 
import styles from './CourseInput.module.css'

import Button from '../../UI/Button/Button';

// TODO: props придут с app.js
const CourseInput = props => {
  
  // состояние чтобы сохранять значение input'a
  const [enteredValue, setEnteredValue] = useState('');
  // для проверки значения input'a
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
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* styles.invalid будет срабатывать если попытаться отправить пустое значение input'a. см 27  */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
          {/* onChange={GoalInputChangeHandler} TODO: см. 14 строку */}
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
