import React from 'react';
import styles from './Category.module.css';

const Category = (props) => {
    return (
        <div className={styles.categoryBox}>
            <input type="radio" id={props.id} name={props.name} value={props.value} onChange={props.onCheck} />
            <label htmlFor={props.id}>{props.categoryName}</label>
        </div>
    )
}

export default Category;