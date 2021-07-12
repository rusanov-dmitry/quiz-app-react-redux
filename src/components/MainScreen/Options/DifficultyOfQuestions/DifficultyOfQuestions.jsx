import React from 'react';
import styles from './DifficultyOfQuestions.module.css';
import RadioInput from '../../../RadioInput/RadioInput';


const DifficultyOfQuestions = (props) => {
    return (
        <div className={styles.diffOfQuestions}>
            <h2>Difficulty</h2>
            <RadioInput id='diff1' name='difficulty' value='any' label='Any' />
            <RadioInput id='diff2' name='difficulty' value='easy' label='Easy' />
            <RadioInput id='diff3' name='difficulty' value='medium' label='Medium' />
            <RadioInput id='diff4' name='difficulty' value='hard' label='Hard' />
        </div>
    )
}

export default DifficultyOfQuestions;