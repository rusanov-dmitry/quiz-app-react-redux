import React from 'react';
import styles from './MainScreen.module.css';
import Options from './Options/Options';
import Categories from './Categories/Categories';

const MainScreen = (props) => {
    return (
        <div className={styles.content}>
            <h1>TestSelf</h1>
            <div className={styles.gridContainer}>
                <Options />
                <Categories />
            </div>
        </div>
    )
}

export default MainScreen;