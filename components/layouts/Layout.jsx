import React from 'react'
import { Header } from './Header'
import styles from '../../styles/Pages.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div className={ styles.backBox }>
        <div className={ styles.cssSelector }></div>
      </div>
        <main>{children}</main>
    </>
  );
}

export default Layout