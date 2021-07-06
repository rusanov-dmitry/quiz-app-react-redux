import React from 'react';
import styles from './NumberOfQuestions.module.css';

const NumberOfQuestions = (props) => {
    return (
        <div className={styles.numOfQuestions}>
            <h2>Number of questions</h2>
            <input type="number" id='answers' name='answers'
                   placeholder='From 3 to 50' className={styles.inputNumber}/>
        </div>

    )
}

export default NumberOfQuestions;