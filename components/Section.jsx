import React from 'react';
import styles from './Section.module.scss';
import Title from '../components/Title.jsx';

import { useRef } from 'react';
import { useInView } from "framer-motion";

const Section = ({ children, name }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className={ styles.section }>
        <div className={ styles.outline }>
            <div className={ styles.contentBox } ref={ ref }>
                <Title name={ name } inScreen={ isInView }/>
                { children }
            </div>
        </div>
    </div>
    )
}
export default Section