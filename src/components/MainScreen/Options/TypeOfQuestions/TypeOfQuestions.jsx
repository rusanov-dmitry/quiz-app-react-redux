import React from 'react';
import styles from './TypeOfQuestions.module.css';
import RadioInput from '../../../RadioInput/RadioInput';

const TypeOfQuestions = (props) => {

    let onTypeChanged = (e) => {
        let type = e.target.value;
        props.onTypeChanged(type);
    }

    return (
        <div className={styles.typeOfQuestions}>
            <h2>Answers type</h2>
            <RadioInput id='answer1' name='answer' value='any' label='Any' onCheck={onTypeChanged} />
            <RadioInput id='answer2' name='answer' value='multiple' label='Multiple Choice' onCheck={onTypeChanged} />
            <RadioInput id='answer3' name='answer' value='boolean' label='True / False' onCheck={onTypeChanged} />
        </div>
    )
}

export default TypeOfQuestions;