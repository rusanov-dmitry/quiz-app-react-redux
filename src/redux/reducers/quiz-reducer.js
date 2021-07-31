const SET_QUESTIONS = 'SET_QUESTIONS';
const ADD_POINT = 'ADD_POINT';
const CHANGE_FETCH_STATUS = 'CHANGE_FETCH_STATUS';

let initialState = {
    questions: [],
    correctAnswers: 0,
    isFetching: false
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {...state, questions: [...action.questions]};
        case ADD_POINT:
            return {...state, correctAnswers: state.correctAnswers + 1};
        case CHANGE_FETCH_STATUS:
            return {...state, isFetching: action.status};
        default:
            return state;
    }
}

export const setQuestions = (questions) => ({type: SET_QUESTIONS, questions});
export const addPoint = () => ({type: ADD_POINT});
export const changeFetchStatus = (status) => ({type: CHANGE_FETCH_STATUS, status});

export default quizReducer;