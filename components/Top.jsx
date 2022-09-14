import React from 'react';
import styles from './Top.module.scss';

const Top = () => {
  return (
    <>
      <div className={ styles.container }>
        <div className={ styles.bord }>
          <div className={ styles.stand }>
            <div className={ styles.box1 }><h1 className={ styles.title }>めいだいまえ no <span>アオガクセイ</span></h1></div>
            <div className={ styles.box2 }></div>
            <div className={ styles.box3 }></div>
            <div className={ styles.box4 }></div>
            <div className={ styles.box5 }></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Top