import React from "react";
import AboutMe from "./conponentsBody/AboutMe";
import Skills from "./conponentsBody/Skills";
import Resumes from "./conponentsBody/Resumes";
import Services from "./conponentsBody/Services";
import Portafolio from "./conponentsBody/Portafilio";
import Contact from "./conponentsBody/Contact";


const Body = () => {

    return (
        <div className="containerBody">
            <section id="about">
                <div className="seccionAbout">
                    <hr className="lineAbout" />
                    <div className="myAbout"><h5>About Me</h5></div>
                    <hr className="lineAbout" />
                </div>
                <AboutMe />
            </section>

            <section id="skills">
                <div className="seccionAbout">
                    <hr className="lineAbout" />
                    <div className="myAbout"><h5>skills</h5></div>
                    <hr className="lineAbout" />
                </div>
                <Skills />
            </section>

            <section id="resumes">
                <div className="seccionAbout">
                    <hr className="lineAbout" />
                    <div className="myAbout"><h5>resumes</h5></div>
                    <hr className="lineAbout" />
                </div>
                <Resumes/>
            </section>

            <section id="services">
                <div className="seccionAbout">
                    <hr className="lineAbout" />
                    <div className="myAbout"><h5>services</h5></div>
                    <hr className="lineAbout" />
                </div>
                <Services />
            </section>

            <section id="portafolio">
                <div className="seccionAbout">
                    <hr className="lineAbout" />
                    <div className="myAbout"><h5>portafolio</h5></div>
                    <hr className="lineAbout" />
                </div>
                <Portafolio />
            </section>

            <section id="contacto">
                <div className="seccionAbout">
                    <hr className="lineAbout" />
                    <div className="myAbout"><h5>contacto</h5></div>
                    <hr className="lineAbout" />
                </div>
                <Contact />
            </section>


        </div>
    )
}

export default Body;