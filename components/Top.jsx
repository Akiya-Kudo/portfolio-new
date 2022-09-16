import React from 'react';
import styles from './Top.module.scss';
import { motion, useAnimation } from "framer-motion";

const Top = () => {

  return (
    <>
      <div className={ styles.container }>
        <div className={ styles.bord }>
          <div className={ styles.stand }>
            <motion.div 
            className={ styles.box1 }
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: .5
              }
            }}
            whileHover={{ 
              scale: 1.1,
            }}
            >
              <h1 className={ styles.title }>
                <span className={ styles.word1 }>め</span>
                <span className={ styles.word3 }>い</span>
                <span className={ styles.word2 }>だ</span>
                <span className={ styles.word2 }>い</span>
                <span className={ styles.word1 }>ま</span>
                <span className={ styles.word3 }>え</span>
                <span className={ styles.word2 }> n</span>
                <span className={ styles.word3 }>o</span>
                <span className={ styles.word1 }> ア</span>
                <span className={ styles.word2 }>オ</span>
                <span className={ styles.word3 }>ガ</span>
                <span className={ styles.word1 }>ク</span>
                <span className={ styles.word3 }>セ</span>
                <span className={ styles.word2 }>イ</span>
              </h1>
            </motion.div>
            <motion.div 
            className={ styles.box2 } 
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: .5,
                delay: .2 
              }
            }}
            whileHover={{ 
              scale: 1.5,
              rotate: 360,
              transition: {
                type: 'string', 
              }
            }}
            ></motion.div>
            <motion.div 
            className={ styles.box3 } 
            initial={{
              y: 200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: .5,
                delay: .4
              }
            }}
            whileHover={{ 
              scale: 1.5,
              rotate: 360,
              transition: {
                type: 'string', 
              }
            }}
            ></motion.div>
            <motion.div 
            className={ styles.box4 } 
            initial={{
              x: 250,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: .5,
                delay: .6 
              }
            }}
            whileHover={{ 
              x: 120,
              rotate: 180,
              transition: {
                duration: .5
              }
            }}
            ></motion.div>
            <motion.div 
            className={ styles.box5 } 
            initial={{
              x: -250,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: .5,
                delay: .8
              }
            }}
            whileHover={{ 
              x: -120,
              rotate: -180,
              transition: {
                duration: .5
              }
            }}
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Top