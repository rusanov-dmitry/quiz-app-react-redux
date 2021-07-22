import React from 'react';
import styles from './DifficultyOfQuestions.module.css';
import RadioInput from '../../../RadioInput/RadioInput';

const DifficultyOfQuestions = (props) => {

    let onDifficultyChanged = (e) => {
        let diff = e.target.value;
        props.onDifficultyChanged(diff);
    }

    return (
        <div className={styles.diffOfQuestions}>
            <h2>Difficulty</h2>
            <RadioInput id='diff1' name='difficulty' value='any' label='Any' onCheck={onDifficultyChanged} />
            <RadioInput id='diff2' name='difficulty' value='easy' label='Easy' onCheck={onDifficultyChanged} />
            <RadioInput id='diff3' name='difficulty' value='medium' label='Medium' onCheck={onDifficultyChanged} />
            <RadioInput id='diff4' name='difficulty' value='hard' label='Hard' onCheck={onDifficultyChanged} />
        </div>
    )
}

export default DifficultyOfQuestions;