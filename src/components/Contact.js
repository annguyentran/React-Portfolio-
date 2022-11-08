import React, { useRef, useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';


export const Contact = () => {
    const [email, setEmail] = useState('');

    return (
        <form>
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