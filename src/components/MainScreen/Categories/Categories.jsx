import React from 'react';
import styles from './Categories.module.css';
import Category from './Category/Category';

const Categories = (props) => {

    let categoriesElements = props.categoriesList.map( category => <Category id={category.id} name='category' 
                                                                            value={category.id} 
                                                                            categoryName={category.name} /> )

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