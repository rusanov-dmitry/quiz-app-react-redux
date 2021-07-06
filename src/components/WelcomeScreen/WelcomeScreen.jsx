import React from 'react';
import styles from './WelcomeScreen.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

const WelcomeScreen = (props) => {
    return (
        <div className={styles.content}>
            <h1 className={styles.mainHeader}>Welcome to TestSelf</h1>
            <h2 className={styles.subheader}>Do you want to test your erudition?</h2>
            <PrimaryButton itemPath='/main' itemName='Of course!' />
            <SecondaryButton itemPath='/' itemName='No, thanks' />
        </div>
    )
}

export default WelcomeScreen;