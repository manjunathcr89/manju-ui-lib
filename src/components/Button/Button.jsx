import React from 'react';
import styles from './Button.module.css';

export const Button = (props) => {
    return <button className={styles['m-button']}>
        {props.children}
    </button>
}
