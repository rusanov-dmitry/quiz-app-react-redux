import React from 'react';
import styles from './WrongQuizHandler.module.css';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const WrongQuizHandler = (props) => {
    return (
        <div className={styles.content}>
            <h2 className={styles.sorryHeader}>Sorry, something went wrong :(<br /> Try another quiz!</h2>
            <PrimaryButton itemPath='/main' itemName='Got it!' />
        </div>
    )
}

export default WrongQuizHandler;