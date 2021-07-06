import React from 'react';
import styles from './RadioInput.module.css'

const RadioInput = (props) => {
    return (
        <div className={styles.radioButton}>
            <input type="radio" id='radio1' name='opop' value='any' className={styles.customRadio}/>
            <label htmlFor="radio1">Option 1</label>
        </div>
    )
}

export default RadioInput;