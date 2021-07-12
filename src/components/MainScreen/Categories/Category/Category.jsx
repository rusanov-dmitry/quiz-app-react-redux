import React from 'react';
import styles from './Category.module.css';

const Category = (props) => {
    return (
        <div className={styles.categoryBox}>
            <p className={styles.categoryName}>{props.categoryName}</p>
        </div>
    )
}

export default Category;