import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  // DATA. т.е в ней будут сохраняться все Goal'ы
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);


  // TODO: функция, которая передается как пропс и получает значение input'a
  const addGoalHandler = (enteredText) => { // enteredText - значение input'a
    setCourseGoals(  (prevGoals) => {
      // TODO: сохраняем старые значения и добавляем новое полученное значение
      const updatedGoals = [...prevGoals];
      // unshift будет добавлять в начало массива TODO: id даем для key'a
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  // функция для удаления Goal'ов
  const deleteItemHandler = (goalId) => {
    setCourseGoals(prevGoals => {
      // фильтрация по id Goall'a
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  // TODO: на случай если goal'ов не будет в courseGoals
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  // проверка есть ли Goal'ы в DATA(courseGoals)
  if (courseGoals.length > 0) {
    // если есть будут рендериться Goal'ы которые есть в DAT'e
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  } // TODO: если нет см 36 строку

  return (
    <div>
      <section id="goal-form">
        {/*TODO: функция переданная как пропс чтобы добавлять новые значения */}
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {/* TODO: см 34 - 44 */}
        {content} 

      </section>
    </div>
  );
};

export default App;
