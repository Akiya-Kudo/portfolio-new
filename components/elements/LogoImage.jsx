import Image from 'next/image'
import React from 'react';

const LogoImage = ({ lang, hei, wid }) => {
  return (
    <Image src={`/${ lang }-icon.png`} alt="" height={ hei } width={ wid }/>
  )
}

export default LogoImage