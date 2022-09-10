import React from 'react';
import styles from './Section.module.scss';

const Section = ({ children }) => {
  return (
    <div className={ styles.section }>
        <div className={ styles.outline }>
            <div className={ styles.contentBox }>
              { children }
            </div>
        </div>
    </div>
  )
}

export default Section