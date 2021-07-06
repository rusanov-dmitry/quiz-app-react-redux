import React from 'react';
import styles from './Options.module.css';
import NumberOfQuestions from './NumberOfQuestions/NumberOfQuestions';
import TypeOfQuestions from './TypeOfQuestions/TypeOfQuestions';
import DifficultyOfQuestions from './DifficultyOfQuestions/DifficultyOfQuestions';

const Options = (props) => {
    return (
        <div className={styles.options}>
            <NumberOfQuestions />
            <TypeOfQuestions />
            <DifficultyOfQuestions />
        </div>
    )
}

export default Options;