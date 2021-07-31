import React from 'react';
import Question from './Question/Question';
import styles from './QuizScreen.module.css';
import WrongQuizHandler from './WrongQuizHandler/WrongQuizHandler';

const QuizScreen = (props) => {

    let questionElements = props.questions.map((element, index) => {
        return <Question key={index} 
                        questionNumber={index} 
                        question={element.question} 
                        correctAnswer={element.correct_answer} 
                        incorrectAnswers={element.incorrect_answers}
                        numOfQuestions={props.questions.length}
                        onAnswerChoosed={props.onAnswerChoosed}
                        goToNextQuestion={props.goToNextQuestion} />
    });

    return (
        <div className={styles.content}>
            <h2>{typeof props.questions[0] !== 'undefined' ? props.questions[0].category : <WrongQuizHandler />}</h2>
            {questionElements[props.currentQuestion]}
        </div>
    )
}

export default QuizScreen;