
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className='form-group'>
                <label >Name</label>
                <input className='form-control'type="text" name="user_name" />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input className='form-control' type="email" name="user_email" />
            </div>
            <div className='form-group'>
                <label>Message</label>
                <textarea className='form-control' name="message" />
                <input type="submit" value="Send" />
            </div>
        </form>
    );
};


export default Contact;