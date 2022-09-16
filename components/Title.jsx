import React, { useEffect } from 'react';
import styles from './Title.module.scss';

import { motion, useAnimation } from "framer-motion";

const Title = ({ name, inScreen }) => {

  const animation = useAnimation();

  useEffect(() => {
    // console.log("Element is in view: ", inScreen)
    if(inScreen) {
        animation.start({
        x : 0,
        opacity: 1,
        transition : {
          type: 'tween', 
          duration : .8
        }
        });
    } else {
        animation.start({ 
          x : -200,
          opacity: 0,
        })
    }
  }, [inScreen])

  return (
    <>
      <motion.div
        className={styles.sectTitleOutline}
        animate={ animation } 
      >
      {/* <div className={styles.sectTitleOutline}> */}
        <div className={ styles.sectTitle }>{ name }</div>
      </motion.div>
      {/* </div> */}
    </>
  )
}

export default Title