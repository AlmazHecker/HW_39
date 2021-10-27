import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

// компонент который будет рендерить Goal'ы 
const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
        // goal.id - это рандомно сгенерированный id
          key={goal.id} // чтобы react работал стабильно
          id={goal.id} // TODO: пригодится для удаления элемента
          onDelete={props.onDeleteItem} // функция которая будет удалять(фильтровать) значение
        >
          {/* значения input'ов которые сохранены в DAT'е */}
          {goal.text} 
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
