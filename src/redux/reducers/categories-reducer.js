const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST';
const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY';

let initialState = {
    categoriesList: [],
    category: ''
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_LIST:
            return {...state, categoriesList: [...action.categoriesList]}
        case CHOOSE_CATEGORY:
            return {...state, category: action.category}
        default:
            return state;
    }
}

export const setCategoriesList = (categoriesList) => ({type: SET_CATEGORIES_LIST, categoriesList});
export const chooseCategory = (category) => ({type: CHOOSE_CATEGORY, category});

export default categoriesReducer;