import React, { useRef, useState } from 'react';
import styles from './ContactForm.module.scss';
import emailjs from '@emailjs/browser';
import { SSubmit } from './elements';
import Image from 'next/image';
import Popup from './Popup';

const ContactForm = () => {

    // 送信後のポップメッセージ
    const form = useRef();
    const [visibility, setVisibility] = useState(false); 
    const [popMessage, setPopMessage] = useState(''); 

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_spng4qn', 'template_clo1ydr', form.current, 'HqBf895SEhvZW7F_s')
        .then((result) => {

            setPopMessage('お問い合わせ承りました。');
            setVisibility(true);
            setTimeout(() => setVisibility(false), 5000);

            nameRef.current.value = "";
            mailRef.current.value = ''
            contentRef.current.value = "";

        }, (error) => {
            setPopMessage('送信に失敗しました。恐れ入りますがもう一度送信をお願いします。');
            setVisibility(true);
            setTimeout(() => setVisibility(false), 5000);

        });
    };

    // 入力値の変更、取得
    const nameRef = useRef('');
    const mailRef = useRef('');
    const contentRef = useRef('');

    return (
        <div className={ styles.formContainer }>
            <Popup visibility={ visibility } content={ popMessage }/>
            <form ref={form} onSubmit={sendEmail} className={ styles.contactForm }>
                <div className={ styles.inputs }>
                    <label>お名前 : name</label>
                    <input type="text" name="name" required ref={ nameRef } />
                </div>
                <div className={ styles.inputs }>
                    <label>メールアドレス : Email</label>
                    <input type="email" name="mail" required ref={ mailRef }/>
                </div>
                <div className={ styles.inputs }>
                    <label>内容 : Message</label>
                    <textarea name="message" required ref={ contentRef }/>
                </div>
                <SSubmit type="submit" value="送信 : Submit" />
            </form>
            <nav className={ styles.sns }>
                <a href="https://github.com/Akiya-Kudo" className={ styles.gitLink } target="_blank" rel="noopener noreferrer">
                    <Image src="/github-icon.png" alt="" height={40} width={40} className={ styles.gitIcon }/>
                </a>
                <a href="https://www.instagram.com/akiyy0711/?hl=ja" className={ styles.gitLink } target="_blank" rel="noopener noreferrer">
                    <Image src="/insta-icon.png" alt="" height={40} width={40} className={ styles.gitIcon }/>
                </a>
            </nav>
        </div>
    );
}

export default ContactForm