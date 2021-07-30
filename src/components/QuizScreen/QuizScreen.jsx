import React from 'react';
import Question from './Question/Question';
import styles from './QuizScreen.module.css';
import WrongQuizHandler from './WrongQuizHandler/WrongQuizHandler';

const QuizScreen = (props) => {
    return (
        <div className={styles.content}>
            <h2>{typeof props.questions[0] !== 'undefined' ? props.questions[0].category : <WrongQuizHandler />}</h2>
        </div>
    )   
}

export default QuizScreen;