import React from 'react';
import styles from './MainScreen.module.css';
import Categories from './Categories/Categories';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import OptionsContainer from './Options/OptionsContainer';

const MainScreen = (props) => {
    return (
        <div className={styles.content}>
            <h1>TestSelf</h1>
            <div className={styles.gridContainer}>
                <OptionsContainer />
                <Categories categoriesList={props.categoriesList} />
            </div>
            <PrimaryButton itemPath='/quiz' itemName='Start quiz' />
        </div>
    )
}

export default MainScreen;