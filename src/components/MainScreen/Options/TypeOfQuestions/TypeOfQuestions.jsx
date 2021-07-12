import React from 'react';
import styles from './TypeOfQuestions.module.css';
import RadioInput from './../../../RadioInput/RadioInput';

const TypeOfQuestions = (props) => {
    return (
        <div className={styles.typeOfQuestions}>
            <h2>Answers type</h2>
            <RadioInput typeName='Any' />
            <RadioInput typeName='Multiple Choice' />
            <RadioInput typeName='True / False' />
        </div>
    )
}

export default TypeOfQuestions;