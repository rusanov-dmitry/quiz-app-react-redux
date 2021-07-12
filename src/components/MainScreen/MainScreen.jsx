import React from 'react';
import styles from './MainScreen.module.css';
import Options from './Options/Options';
import Categories from './Categories/Categories';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const MainScreen = (props) => {
    return (
        <div className={styles.content}>
            <h1>TestSelf</h1>
            <div className={styles.gridContainer}>
                <Options />
                <Categories />
            </div>
            <PrimaryButton itemPath='/quiz' itemName='Start quiz' />
        </div>
    )
}

export default MainScreen;