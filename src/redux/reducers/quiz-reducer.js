const SET_QUESTIONS = 'SET_QUESTIONS';
const ADD_POINT = 'ADD_POINT';
const CHANGE_FETCH_STATUS = 'CHANGE_FETCH_STATUS';
const GO_TO_NEXT_QUESTION = 'GO_TO_NEXT_QUESTION';

let initialState = {
    questions: [],
    correctAnswers: 0,
    isFetching: false,
    currentQuestion: 0
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {...state, questions: [...action.questions]};
        case ADD_POINT:
            return {...state, correctAnswers: state.correctAnswers + 1};
        case CHANGE_FETCH_STATUS:
            return {...state, isFetching: action.status};
        case GO_TO_NEXT_QUESTION:
            return {...state, currentQuestion: state.currentQuestion + 1};
        default:
            return state;
    }
}

export const setQuestions = (questions) => ({type: SET_QUESTIONS, questions});
export const addPoint = () => ({type: ADD_POINT});
export const changeFetchStatus = (status) => ({type: CHANGE_FETCH_STATUS, status});
export const goToNextQuestion = () => ({type: GO_TO_NEXT_QUESTION});

export default quizReducer;