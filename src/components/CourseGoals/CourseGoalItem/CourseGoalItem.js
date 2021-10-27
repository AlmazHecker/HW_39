import React from 'react';

import './CourseGoalItem.css';

// TODO: props придут с компоненты CourseGoalList
const CourseGoalItem = props => {

  // функция для удаления значения input'а
  const deleteHandler = () => {
    // при нажатии удаляет Goal у которого id равен тому который мы нажали  
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {/* здесь будут props.text TODO: т.е значение input'a */}
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
