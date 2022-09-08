import React from 'react'
import styles from './Header.module.scss';
import NavLink from '../elements/NavLink';

export  const Header = () => {

    return (
      <>
        <header className={ styles.header }>
          <div className={ styles.inner }>
            <span className={ styles.logo }>
              <NavLink href="/" name="logo" />
            </span>
            <nav className={ styles.nav }>
              <NavLink href="/" name="アバウト" />
              <NavLink href="/contact" name="コンタクト" />
            </nav>
          </div>
        </header>
      </>
    )
  }