import React from 'react';
import axios from 'axios';
import MainScreen from './MainScreen';
import { connect } from 'react-redux';
import { setCategoriesList, chooseCategory } from '../../redux/reducers/categories-reducer';

class MainScreenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onCategoryChanged = this.onCategoryChanged.bind(this);
    }

    componentDidMount() {
        axios.get('https://opentdb.com/api_category.php').then(response => {
            this.props.setCategoriesList(response.data.trivia_categories);
        });
    }

    onCategoryChanged(category) {
        this.props.chooseCategory(category);
    }

    render() {
        return (
            <MainScreen categoriesList={this.props.categoriesList} onCategoryChanged={this.onCategoryChanged} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categoriesList: state.categoriesTab.categoriesList,
        category: state.categoriesTab.category
    }
} 

export default connect(mapStateToProps, {
    setCategoriesList, chooseCategory})(MainScreenContainer);