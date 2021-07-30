import React from 'react';
import Question from './Question/Question';
import styles from './QuizScreen.module.css';

const QuizScreen = (props) => {
    return (
        <div className={styles.content}>
            <h2>{typeof props.questions[0] !== 'undefined' ? props.questions[0].category : 'Loading...'}</h2>
        </div>
    )   
}

export default QuizScreen;