import React from 'react';
import styles from './Question.module.css';
import Answer from './Answer/Answer';

const Question = (props) => {

    let onAnswerChoosed = (e) => {
        let answer = e.target.value;
        props.onAnswerChoosed(answer, props.correctAnswer);
        props.goToNextQuestion();
    }

    let randomIndex = Math.floor(Math.random() * 4);
    let answers = [...props.incorrectAnswers];
    answers.splice(randomIndex, 0, props.correctAnswer);
    let answersElements = answers.map((answer, index) => <Answer key={index} 
                                                                id={answer} 
                                                                name={props.question} 
                                                                value={answer} 
                                                                answerText={answer}
                                                                onCheck={onAnswerChoosed} />);

    return (
        <div className={styles.content}>

            <div className={styles.questionTitle}>
                <p>{props.question}</p>
                <span className={styles.counter}>{props.questionNumber+1}/{props.numOfQuestions}</span>
            </div>

            <div className={styles.questions}>
                {answersElements}
            </div>

        </div>
    )
}

export default Question;