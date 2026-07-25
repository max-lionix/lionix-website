import React from "react";
import './About.css';

const About = () => {
    return (
        <>
            <main className="about-page">
                <section className="about-hero">
                    <h1>Про Lionix Studio</h1>
                    <p>
                        Ми створюємо ігровий та digital-контент, який допомагає брендам
                        зростати, знаходити аудиторію та будувати спільноти.
                    </p>
                </section>

                <section className="about-grid">
                    <h2 className="section-title">Чим ми займаємось</h2>
                    <div className="grid-container">
                        <div className="about-card">
                            <h3>🎮 Ігровий контент</h3>
                            <p>Працюємо з YouTube, стримінгом та геймінг-спільнотами</p>
                        </div>

                        <div className="about-card">
                            <h3>💻 Digital & Web</h3>
                            <p>Розробляємо сайти, брендинг та UI/UX</p>
                        </div>

                        <div className="about-card">
                            <h3>🚀 Зростання</h3>
                            <p>Допомагаємо перетворювати хобі в прибуткові проєкти</p>
                        </div>
                    </div>
                </section>
                <section className="about-cta">
                    <h2>Хочеш працювати з нами?</h2>
                    <p>Напиши нам — відповімо протягом 24 годин</p>
                    <button className="primary-btn">Звʼязатися</button>
                </section>
            </main>
        </>
    );
};

export default About;