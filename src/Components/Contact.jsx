import React from 'react';

function Contact() {

    return(

        <div id='contact'>
            <h1> Send Me Mail </h1>
            <div className='contact-input'>
                <input type="email" placeholder='Enter Your Email Here.' />
                <a href='#'> Contact </a>
            </div>
        </div>

    );

}

export default Contact;