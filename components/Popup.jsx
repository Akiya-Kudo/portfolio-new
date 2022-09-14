import React from 'react';
import styles from './ContactForm.module.scss';

const Popup = ({ content, visibility  }) => {
    if (!visibility) return null;
    return (           
        <div className={ styles.popup }>
            <h1>{ content }</h1>
        </div>
    )
}

export default Popup