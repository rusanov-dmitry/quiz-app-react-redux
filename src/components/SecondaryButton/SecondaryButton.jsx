import React from 'react';
import styles from './SecondaryButton.module.css';
import {NavLink} from 'react-router-dom';

const SecondaryButton = (props) => {
    return (
        <div className={styles.button}>
            <NavLink to={props.itemPath}>{props.itemName}</NavLink>
        </div>
    )
}

export default SecondaryButton;