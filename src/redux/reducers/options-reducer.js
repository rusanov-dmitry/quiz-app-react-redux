const SET_NUMBER_OF_QUESTIONS = 'SET_NUMBER_OF_QUESTIONS';
const SET_ANSWERS_TYPE = 'SET_ANSWERS_TYPE';
const SET_DIFFICULTY = 'SET_DIFFICULTY';

let initialState = {
    numberOfQuestions: '0',
    answersType: 'any',
    difficulty: 'any'
};

const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NUMBER_OF_QUESTIONS:
            return {...state, numberOfQuestions: action.numberOfQuestions}
        case SET_ANSWERS_TYPE:
            return {...state, answersType: action.answersType}
        case SET_DIFFICULTY:
            return {...state, difficulty: action.difficulty}
        default:
            return state;
    }
}

export const setNumberOfQuestions = (numberOfQuestions) => ({type: SET_NUMBER_OF_QUESTIONS, numberOfQuestions});
export const setAnswersType = (answersType) => ({type: SET_ANSWERS_TYPE, answersType});
export const setDifficulty = (difficulty) => ({type: SET_DIFFICULTY, difficulty});

export default optionsReducer;