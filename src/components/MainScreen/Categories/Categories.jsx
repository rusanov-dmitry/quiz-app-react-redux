import React from 'react';
import styles from './Categories.module.css';
import Category from './Category/Category';

const Categories = (props) => {
    return (
        <div className={styles.categories}>
            <h2>Categories</h2>
            <div className={styles.categoriesList}>
                <Category id='cat1' name='cats'
                          value='1' categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category id='cat2' name='cats'
                          value='2' categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category id='cat3' name='cats'
                          value='3' categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category id='cat4' name='cats'
                          value='4' categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category id='cat5' name='cats'
                          value='5' categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category id='cat6' name='cats'
                          value='6' categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category id='cat7' name='cats'
                          value='7' categoryName='Entertaiment: Japanese Anime & Manga' />
            </div>
        </div>
    )
}

export default Categories;