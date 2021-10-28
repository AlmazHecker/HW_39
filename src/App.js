import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

const App = () => {
    // DATA для значений input'ов
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

    // функция для добавления значений input'ов
  const addGoalHandler = enteredText => { 
    setCourseGoals(prevGoals => {  
        // сохраняем старые значения
      const updatedGoals = [...prevGoals];
        // добавляем в самое начало новые значения
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

    // функция для удаления Goal'ов
  const deleteItemHandler = goalId => { 
    setCourseGoals(prevGoals => {
        // фильтруем по id
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };
    // на случай если DATA окажется пустой
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

    // если DATA не пуста
  if (courseGoals.length > 0) {
    content = (
    //  рендерятся Goal'ы
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
          {/* TODO: функция для добавления новых значений */}
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
          {/* см 34, 39 */}
        {content}
      </section>
    </div>
  );
};

export default App;
