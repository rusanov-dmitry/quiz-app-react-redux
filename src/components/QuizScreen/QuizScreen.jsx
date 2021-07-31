import React from 'react';
import ResultScreen from '../ResultScreen/ResultScreen';
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
            {
                props.currentQuestion < props.questions.length
                ?
                <div>
                    <h2>{typeof props.questions[0] !== 'undefined' ? props.questions[0].category : <WrongQuizHandler />}</h2>
                    {questionElements[props.currentQuestion]}
                </div>
                :
                <ResultScreen correctAnswers={props.correctAnswers} numOfQuestions={props.questions.length} />
            }
        </div>
    )
}

export default QuizScreen;