import React from "react";
import yakudzaDark from '../../assets/ysdark.svg';
import yakudzaLight from '../../assets/yslight.svg';
import lionixSquad from '../../assets/lsquad.svg'
import lionixDev from '../../assets/ldevelopment.svg'
import './Project.css'

const Project = () => {
    return (
        <>
            <main className="project-page">
                <section className="projects">
                    <h1 className="section-title">Наші проєкти</h1>
                    <div className="project-container">
                        <div className="project-card">
                            <img src={lionixSquad} className="lionix-squad" alt="Lionix Squad" />
                            <a href="https://www.youtube.com/@LionixSquad">Lionix Squad</a>
                            <p>Команда гравців в Minecraft</p>
                        </div>

                        <div className="project-card">
                            <img src={yakudzaDark} className="yakudza-dark" alt="Yakudza Squad" />
                            <img src={yakudzaLight} className="yakudza-light" alt="Yakudza Squad" />
                            <a href="https://www.youtube.com/@YakudzaSquad">Yakudza Squad</a>
                            <p>Кіберспортивна команда по Brawl Stars</p>
                        </div>

                        <div className="project-card">
                            <img src={lionixDev} className="ld" alt="Lionix Development" />
                            <a href="">Lionix Development</a>
                            <p>Команда розробників</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Project;