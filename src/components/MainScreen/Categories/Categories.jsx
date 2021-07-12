import React from 'react';
import styles from './Categories.module.css';
import Category from './Category/Category';

const Categories = (props) => {
    return (
        <div className={styles.categories}>
            <h2>Categories</h2>
            <div className={styles.categoriesList}>
                <Category categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category categoryName='Entertaiment: Japanese Anime & Manga' />
                <Category categoryName='Entertaiment: Japanese Anime & Manga' />
            </div>
        </div>
    )
}

export default Categories;