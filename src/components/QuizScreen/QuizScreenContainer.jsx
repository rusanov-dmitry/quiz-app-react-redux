import React from 'react';
import { connect } from 'react-redux';
import QuizScreen from './QuizScreen';
import { setQuestions, addPoint } from '../../redux/reducers/quiz-reducer';
import axios from 'axios';

class QuizScreenContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(
            `https://opentdb.com/api.php?amount=${this.props.numberOfQuestions}&category=${this.props.category}&difficulty=${this.props.difficulty}&type=${this.props.answersType}`
        ).then(response => {
            this.props.setQuestions(response.data.results);
        });
    }

    render() {
        return (
            <QuizScreen questions={this.props.questions} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.quizTab.questions,
        numberOfQuestions: state.optionsTab.numberOfQuestions,
        answersType: state.optionsTab.answersType,
        difficulty: state.optionsTab.difficulty,
        category: state.categoriesTab.category
    }
}

export default connect(mapStateToProps, {
    setQuestions, addPoint})(QuizScreenContainer);