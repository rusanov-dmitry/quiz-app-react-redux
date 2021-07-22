import React from 'react';
import Options from './Options';
import {setAnswersType, setDifficulty, setNumberOfQuestions} from '../../../redux/reducers/options-reducer';
import {connect} from 'react-redux';

class OptionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onNumberChanged = this.onNumberChanged.bind(this);
    }

    onNumberChanged(num) {
        this.props.setNumberOfQuestions(num);
    }

    render() {
        return <Options onNumberChanged={this.onNumberChanged} numberOfQuestions={this.props.numberOfQuestions} />
    }
}

const mapStateToProps = (state) => {
    return {
        numberOfQuestions: state.numberOfQuestions,
        answersType: state.answersType,
        difficulty: state.difficulty
    }
}

export default connect(mapStateToProps, {
    setNumberOfQuestions, setAnswersType, setDifficulty})(OptionsContainer);