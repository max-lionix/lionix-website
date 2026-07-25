import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer-logo">Lionix Studio</h2>
            <ul className="footer-list">
                    <li className="footer-list-item">
                        <Link to="/about" className="footer-link">Про нас</Link>
                    </li>
                    <li className="footer-list-item">
                        <Link to="/project" className="footer-link">Проєкти</Link>
                    </li>
                    <li className="footer-list-item">
                        <Link to="/service" className="footer-link">Послуги</Link>
                    </li>
                    <li className="footer-list-item">
                        <Link to="/blog" className="footer-link">Блог</Link>
                    </li>
                </ul>
                <div className="footer-contacts">
                    <div className="contact-item">
                        <span>📞</span>
                        <a href="tel:+48886409993">+48 886 409 993</a>
                    </div>
                    <div className="contact-item">
                        <span>✉️</span>
                        <a href="mailto:admin@lionixstudio.pp.ua">
                            admin@lionixstudio.pp.ua
                        </a>
                    </div>
                </div>
                <div className="socials">
                        <a href="https://github.com/lionix-studio" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://t.me/lionixstudio" target="_blank" rel="noreferrer" aria-label="Telegram">
                            <FaTelegram />
                        </a>
                        <a href="https://youtube.com/@StudioLNX" target="_blank" rel="noreferrer" aria-label="Youtube">
                            <FaYoutube />
                        </a>
                </div>
                <div className="copyright">© 2024-{new Date().getFullYear()} Lionix Studio Rights not reserved.</div>
        </footer>
    );
};

export default Footer;