import React from 'react';
import styles from './Categories.module.css';
import Category from './Category/Category';

const Categories = (props) => {

    let onCategoryChanged = (e) => {
        let category = e.target.value;
        props.onCategoryChanged(category);
    }

    let categoriesElements = props.categoriesList.map( category => <Category key={category.id} id={category.id} name='category' 
                                                                            value={category.id} 
                                                                            categoryName={category.name}
                                                                            onCheck={onCategoryChanged} /> )

    return (
        <div className={styles.categories}>
            <h2>Categories</h2>
            <div className={styles.categoriesList}>
                { categoriesElements }
            </div>
        </div>
    )
}

export default Categories;