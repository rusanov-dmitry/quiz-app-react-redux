import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import styles from './ResultScreen.module.css';

const ResultScreen = (props) => {

    let accuracy = Math.floor(props.correctAnswers / props.numOfQuestions * 100);
    let titleText = '';

    if (accuracy < 50) {
        titleText = 'Better luck next time!';
    } else if (accuracy > 50 && accuracy < 80) {
        titleText = 'Well done!';
    } else {
        titleText = 'Amazing work!';
    }

    return (
        <div className={styles.content}>
                <h1 className={styles.mainHeader}>{titleText}</h1>
                <h2 className={styles.subheader}>You answered <span>{accuracy}%</span> of the questions correctly</h2>
                <PrimaryButton itemPath='/main' itemName='Back to menu' />
        </div>
    )
}

export default ResultScreen;