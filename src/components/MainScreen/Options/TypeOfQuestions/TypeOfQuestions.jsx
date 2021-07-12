import React from 'react';
import styles from './TypeOfQuestions.module.css';
import RadioInput from '../../../RadioInput/RadioInput';

const TypeOfQuestions = (props) => {
    return (
        <div className={styles.typeOfQuestions}>
            <h2>Answers type</h2>
            <RadioInput id='answer1' name='answer' value='any' label='Any' />
            <RadioInput id='answer2' name='answer' value='multiple' label='Multiple Choice' />
            <RadioInput id='answer3' name='answer' value='boolean' label='True / False' />
        </div>
    )
}

export default TypeOfQuestions;