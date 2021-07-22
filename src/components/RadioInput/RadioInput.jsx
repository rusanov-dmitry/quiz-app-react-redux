import React from 'react';
import styles from './RadioInput.module.css'

const RadioInput = (props) => {
    return (
        <div className={styles.radioButton}>
            <input type="radio" id={props.id} name={props.name} value={props.value} className={styles.customRadio} onChange={props.onCheck} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default RadioInput;