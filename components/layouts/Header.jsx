import React from 'react'
import styles from './Header.module.scss';
import NavLink from '../elements/NavLink';
// import Accordion from '../Accordion';

export  const Header = () => {

    return (
      <>
        <header className={ styles.header }>
          <div className={ styles.inner }>
            {/* <span className={ styles.logo }>
              <NavLink href="/">Home</NavLink>
            </span> */}
            <nav className={ styles.nav }>
            {/* <Accordion> */}
              <NavLink href="/">About</NavLink>
            {/* </Accordion> */}
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </div>
        </header>
      </>
    )
  }