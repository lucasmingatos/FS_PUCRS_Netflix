import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/474x/f6/0b/1d/f60b1d0128f7f4a6d11f6ba75d06177b.jpg" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}