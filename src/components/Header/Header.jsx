import React from 'react';
import styles from './Header.module.css';

export const Header = (props) => {
    return <h2 className={styles['m-header']}>
        {props.children}
    </h2>
}