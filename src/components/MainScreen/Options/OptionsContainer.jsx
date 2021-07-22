import React from 'react';
import Options from './Options';
import {setAnswersType, setDifficulty, setNumberOfQuestions} from '../../../redux/reducers/options-reducer';
import {connect} from 'react-redux';

class OptionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onNumberChanged = this.onNumberChanged.bind(this);
        this.onTypeChanged = this.onTypeChanged.bind(this);
        this.onDifficultyChanged = this.onDifficultyChanged.bind(this);
    }

    onNumberChanged(num) {
        this.props.setNumberOfQuestions(num);
    }

    onTypeChanged(type) {
        this.props.setAnswersType(type);
    }

    onDifficultyChanged(diff) {
        this.props.setDifficulty(diff);
    }

    render() {
        return <Options onNumberChanged={this.onNumberChanged} 
                        onTypeChanged={this.onTypeChanged} 
                        onDifficultyChanged={this.onDifficultyChanged} />
    }
}

const mapStateToProps = (state) => {
    return {
        numberOfQuestions: state.optionsTab.numberOfQuestions,
        answersType: state.optionsTab.answersType,
        difficulty: state.optionsTab.difficulty
    }
}

export default connect(mapStateToProps, {
    setNumberOfQuestions, setAnswersType, setDifficulty})(OptionsContainer);