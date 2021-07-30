import React from 'react';
import styles from './Loader.module.css';
import loader from '../../../assets/images/loader.gif';

const Loader = (props) => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt='loading...' />
        </div>
    )
}

export default Loader;