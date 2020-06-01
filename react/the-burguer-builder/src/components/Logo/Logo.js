import React from 'react';

import burguerLogo from '../../assets/images/burguer-logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burguerLogo} alt="My Burguer"/>
    </div>
);

export default logo;