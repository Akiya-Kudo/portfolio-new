import Head from 'next/head';
import React from 'react'
import { Header } from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet"/> */}
      </Head>
      <Header/>
      <main>{children}</main>
    </>
  );
}

export default Layout