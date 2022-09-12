import React from 'react';
import styles from './Title.module.scss';

const Title = ({ name }) => {
  return (
    <div className={styles.sectTitleOutline}>
      <div className={ styles.sectTitle }>{ name }</div>
    </div>
  )
}

export default Title