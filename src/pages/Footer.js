import React from 'react';
import '../css/Footer.css';

function Footer() {
    return(
        <footer className='footer'>
            <p>© {new Date().getFullYear()} Made by Yana T.</p>
            <button className='contact-button' onClick={() => window.location.href = 
                'mailto:yana.usa.work@gmail.com'
            }>Contact</button>
        </footer>
    )
}
export default Footer;