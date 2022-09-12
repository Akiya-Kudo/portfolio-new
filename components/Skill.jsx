import React from 'react';
import { SAppText, SLangName } from './elements';
import LogoImage from './elements/LogoImage';
import styles from './Skill.module.scss';

const Skill = ({ langName, myLevel, image }) => {
  return (
    <div className={ styles.skill }>
        <LogoImage lang={ image } hei="100" wid="100" />
        <div className={ styles.texts }>
            <SLangName>{ langName }</SLangName>
            <SAppText>{ myLevel }</SAppText>
        </div>
    </div>
  )
}

export default Skill