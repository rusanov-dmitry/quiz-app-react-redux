import React from 'react';
import { connect } from 'react-redux';
import QuizScreen from './QuizScreen';
import { setQuestions, addPoint, changeFetchStatus, goToNextQuestion } from '../../redux/reducers/quiz-reducer';
import axios from 'axios';
import Loader from './Loader/Loader';

class QuizScreenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onAnswerChoosed = this.onAnswerChoosed.bind(this);
    }

    componentDidMount() {
        this.props.changeFetchStatus(true);
        axios.get(
            `https://opentdb.com/api.php?amount=${this.props.numberOfQuestions}&category=${this.props.category}&difficulty=${this.props.difficulty}&type=${this.props.answersType}`
        ).then(response => {
            this.props.changeFetchStatus(false);
            this.props.setQuestions(response.data.results);
        });
    }

    onAnswerChoosed = (choosedAnswer, correctAnswer) => {
        if (choosedAnswer === correctAnswer) {
            this.props.addPoint();
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader /> : <QuizScreen questions={this.props.questions} 
                                                                onAnswerChoosed={this.onAnswerChoosed}
                                                                goToNextQuestion={this.props.goToNextQuestion}
                                                                currentQuestion={this.props.currentQuestion} />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.quizTab.questions,
        isFetching: state.quizTab.isFetching,
        correctAnswers: state.quizTab.correctAnswers,
        currentQuestion: state.quizTab.currentQuestion,
        numberOfQuestions: state.optionsTab.numberOfQuestions,
        answersType: state.optionsTab.answersType,
        difficulty: state.optionsTab.difficulty,
        category: state.categoriesTab.category
    }
}

export default connect(mapStateToProps, {
    setQuestions, addPoint, changeFetchStatus, goToNextQuestion})(QuizScreenContainer);