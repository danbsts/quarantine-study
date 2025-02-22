import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>Burguer Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;