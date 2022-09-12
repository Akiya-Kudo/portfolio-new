import React, { useRef } from 'react';
import styles from './ContactForm.module.scss';
import emailjs from '@emailjs/browser';
import { SSubmit } from './elements';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_spng4qn', 'template_clo1ydr', form.current, 'HqBf895SEhvZW7F_s')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className={ styles.formContainer }>
            <form ref={form} onSubmit={sendEmail} className={ styles.contactForm }>
                <div className={ styles.inputs }>
                    <label>お名前 : name</label>
                    <input type="text" name="name" />
                </div>
                <div className={ styles.inputs }>
                    <label>メールアドレス : Email</label>
                    <input type="email" name="mail" />
                </div>
                <div className={ styles.inputs }>
                    <label>内容 : Message</label>
                    <textarea name="message" />
                </div>
                <SSubmit type="submit" value="送信" />
            </form>
        </div>
    );
}

export default ContactForm