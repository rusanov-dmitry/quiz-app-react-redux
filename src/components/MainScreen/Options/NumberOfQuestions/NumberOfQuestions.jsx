import React from 'react';
import styles from './NumberOfQuestions.module.css';

const NumberOfQuestions = (props) => {

    let onNumberChanged = (e) => {
        let num = e.target.value;
        props.onNumberChanged(num)
    }

    return (
        <div className={styles.numOfQuestions}>
            <h2>Number of questions</h2>
            <input type='number' id='answers' name='answers'
                   placeholder='From 3 to 50' required
                   className={styles.inputNumber} onChange={onNumberChanged}/>
        </div>

    )
}

export default NumberOfQuestions;