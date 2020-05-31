import React from 'react';

import styles from './Burguer.module.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = (props) => {
    return (
        <div className={styles.Burguer}>
            <BurguerIngredient type ="bread-top"/>
            <BurguerIngredient type ="cheese"/>
            <BurguerIngredient type ="meat"/>
            <BurguerIngredient type ="bread-bottom"/>
        </div>
    );
}

export default burguer;