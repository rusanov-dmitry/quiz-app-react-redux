import React from 'react';
import Question from './Question/Question';
import styles from './QuizScreen.module.css';

const QuizScreen = (props) => {
    return (
        <div className={styles.content}>
            <h2>{props.questions[0].category}</h2>
            <Question />
        </div>
    )
}

export default QuizScreen;