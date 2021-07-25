const SET_QUESTIONS = 'SET_QUESTIONS';
const ADD_POINT = 'ADD_POINT';

let initialState = {
    questions: [],
    correctAnswers: '0'
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {...state, questions: [...action.questions]};
        case ADD_POINT:
            return {...state, correctAnswers: state.correctAnswers+1}
        default:
            return state;
    }
}

export const setQuestions = (questions) => ({type: SET_QUESTIONS, questions});
export const addPoint = () => ({type: ADD_POINT});

export default quizReducer;