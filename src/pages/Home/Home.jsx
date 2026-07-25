import React from 'react';
import './Home.css'

const Home = () => {
    return(
        <>
            <section className="hero">
                <h1>
                    Створюємо сучасний <span>ігровий контент</span> для вас
                </h1>
                <p>
                    Lionix Studio — команда, яка допомагає перетворити хоббі в прибуток та популярність
                </p>
                <div className="hero-actions">
                    <button className="primary-btn">Звʼязатися</button>
                    <a href="#projects" className="secondary-btn">Наші проєкти</a>
                </div>
            </section>
            <section className="about">
                <h2>Хто ми</h2>
                <p>
                    Ми — креативна студія, що спеціалізується на продюсуванні
                    YouTube-каналів, їх просуванню та розвитку.
                </p>
            </section>
            <section className="services">
                <h2>Наші послуги</h2>

                <div className="services-grid">
                    <div className="service-card">Створення та оформлення каналу</div>
                    <div className="service-card">Розвиток та підтримка</div>
                    <div className="service-card">Просування та реклама</div>
                    <div className="service-card">Навчання в сфері блогингу</div>
                </div>
                <h3>Додатково:</h3>
                <div className="additional-services-grid">
                    <div className="service-card">Web Development</div>
                    <div className="service-card">UI / UX Design</div>
                    <div className="service-card">Branding</div>
                    <div className="service-card">SEO & Optimization</div>
                </div>
            </section>
            <section id="projects" className="projects">
                <h2>Проєкти</h2>

                <div className="projects-grid">
                    <div className="home-project-card">
                        <h3>Lionix Squad</h3>
                        <span>YouTube / Gaming</span>
                    </div>
                    <div className="home-project-card">
                        <h3>Yakudza Squad</h3>
                        <span>YouTube / Gaming</span>
                    </div>
                    <div className="home-project-card">
                        <h3>Lionix Development</h3>
                        <span>Web / Digital</span>
                    </div>
                </div>
            </section>
            <section className="cta">
                <h2>Готові почати проєкт?</h2>
                <p>Напишіть нам — відповімо протягом 24 годин</p>
                <button className="primary-btn">Звʼязатися</button>
            </section>
        </>
    );
};

export default Home;