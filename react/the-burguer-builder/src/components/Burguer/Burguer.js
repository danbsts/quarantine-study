import React from 'react';

import styles from './Burguer.module.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurguerIngredient key={igKey+i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={styles.Burguer}>
            <BurguerIngredient type ="bread-top"/>
            {transformedIngredients}
            <BurguerIngredient type ="bread-bottom"/>
        </div>
    );
}

export default burguer;