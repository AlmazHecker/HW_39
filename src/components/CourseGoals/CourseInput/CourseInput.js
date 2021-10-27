import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

// TODO: props придут с app.js
const CourseInput = props => {
  
  // состояние чтобы сохранять значение input'a
  const [enteredValue, setEnteredValue] = useState('');

  // функция которая будет записывать в enteredValue значение input'a 
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  // срабатывает при нажатии на button
  const formSubmitHandler = event => {
    // останавливаем перезагрузку сайта
    event.preventDefault();
    
    // TODO: добавляем в DAT'у значение input'a
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
          {/* onChange= {GoalInputChangeHandler} TODO: см. 11 строку */}
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
