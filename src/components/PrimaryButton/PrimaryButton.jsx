import React from 'react';
import styles from './PrimaryButton.module.css';
import {NavLink} from 'react-router-dom';

const PrimaryButton = (props) => {
    return (
        <div className={styles.button}>
            <NavLink to={props.itemPath}>{props.itemName}</NavLink>
        </div>
    )
}

export default PrimaryButton;