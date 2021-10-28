import React from 'react';

import styles from './Button.module.css';
 

const Button = props => {
  return (
    // в комп-е CourseInput мы даем пропс type который равен 'submit'
    <button type={props.type} className={styles.button} >
      {props.children}
      {/* <button> props.children </button> */}
      {/* т.е <button> Add Goal </button> */}
    </button>
  );
};

export default Button;
