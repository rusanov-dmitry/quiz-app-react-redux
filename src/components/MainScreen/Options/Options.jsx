import React from 'react';
import styles from './Options.module.css';
import NumberOfQuestions from './NumberOfQuestions/NumberOfQuestions';
import TypeOfQuestions from './TypeOfQuestions/TypeOfQuestions';
import DifficultyOfQuestions from './DifficultyOfQuestions/DifficultyOfQuestions';

const Options = (props) => {
    return (
        <div className={styles.options}>
            <NumberOfQuestions onNumberChanged={props.onNumberChanged} />
            <TypeOfQuestions onTypeChanged={props.onTypeChanged} />
            <DifficultyOfQuestions onDifficultyChanged={props.onDifficultyChanged} />
        </div>
    )
}

export default Options;