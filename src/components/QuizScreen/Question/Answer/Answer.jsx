import React from 'react';
import styles from './Answer.module.css';

const Answer = (props) => {
    return (
        <div className={styles.answerBox}>
            <input type="radio" id={props.id} name={props.name} value={props.value} onChange={props.onCheck} />
            <label htmlFor={props.id}>{props.answerText}</label>
        </div>
    )
}

export default Answer;