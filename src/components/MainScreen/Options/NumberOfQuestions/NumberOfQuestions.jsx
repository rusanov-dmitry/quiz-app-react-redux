import React from 'react';
import RadioInput from '../../../RadioInput/RadioInput';
import styles from './NumberOfQuestions.module.css';

const NumberOfQuestions = (props) => {

    let onNumberChanged = (e) => {
        let num = e.target.value;
        props.onNumberChanged(num)
    }

    return (
        <div className={styles.numOfQuestions}>
            <h2>Number of questions</h2>
            <div className={styles.options}>
                <RadioInput id='num1' name='num' value='5' label='5' onCheck={onNumberChanged} />
                <RadioInput id='num2' name='num' value='10' label='10' onCheck={onNumberChanged} />
                <RadioInput id='num3' name='num' value='15' label='15' onCheck={onNumberChanged} />
            </div>
        </div>

    )
}

export default NumberOfQuestions;