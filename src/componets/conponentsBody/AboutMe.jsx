import React, { useEffect } from "react";
import './aboutMe.css'
import { FaInstagram, FaLinkedin, FaFacebookSquare, FaFacebookMessenger, FaRegAddressCard, FaRegAddressBook } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { GiBirdHouse } from "react-icons/gi";

const AboutMe = () => {

    useEffect(() => {
        let secciontranform = document.querySelectorAll('.hidden');
        console.log(secciontranform)

        const obsever = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("mostrar", entry.isIntersecting)
            })
        })
        secciontranform.forEach((seccion) => obsever.observe(seccion));

    }, [])
    useEffect(() => {
        let secciontranform = document.querySelectorAll('.hidden1');
        console.log(secciontranform)

        const obsever = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("mostrar", entry.isIntersecting)
            })
        })
        secciontranform.forEach((seccion) => obsever.observe(seccion));

    }, [])

    return (
        <div className="conteinerFirstAboutMe">
            <div className="conaineraboutme">
                <div className="divperfil hidden">
                    <img src="img/jofre_.jpg" alt="" className="perfil" />
                    <h5>Cargo: Desarrollador</h5>
                </div>
                <div>
                    <div className="datospersonales hidden1">
                        <div>
                            <div className="datos-unico">
                                <div className="divIcon">
                                    <FaRegAddressCard className="icondatos" />
                                </div>
                                <div className="datosPer">
                                    <h5>Name: </h5>
                                    <p>Jofre Agustin</p>
                                </div>
                            </div>
                            <div className="datos-unico">
                                <div className="divIcon">
                                    <FaRegAddressBook className="icondatos" />
                                </div>
                                <div className="datosPer">
                                    <h5>Surnames: </h5>
                                    <p>Zambrano Zambrabo</p>
                                </div>
                            </div>
                            <div className="datos-unico">
                                <div className="divIcon">
                                    <MdOutlineEmail className="icondatos" />
                                </div>
                                <div className="datosPer">
                                    <h5>Email: </h5>
                                    <p>joofre.z.z.07@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="intenDatos">
                            <div className="datos-unico">
                                <div className="divIcon">
                                    <FaRegAddressCard className="icondatos" />
                                </div>
                                <div className="datosPer">
                                    <h5>Birthdate: </h5>
                                    <p>07/07/1994</p>
                                </div>
                            </div>
                            <div className="datos-unico">
                                <div className="divIcon">
                                    <GiBirdHouse className="icondatos" />
                                </div>
                                <div className="datosPer"> 
                                    <h5>Country: </h5>
                                    <p>Ecuador</p>
                                </div>
                            </div>
                            <div className="datos-unico">
                                <div className="divIcon">
                                    <GiBirdHouse className="icondatos" />
                                </div>
                                <div className="datosPer">
                                    <h5>Province/Cantón: </h5>
                                    <p>Bolivar Manabi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="perfilesocialContainer hidden1">
                        <div className="perfilSocial">
                            <p>Social profile</p>
                            <FaInstagram className="iconPerfilSocial" />
                            <FaFacebookSquare className="iconPerfilSocial" />
                            <FaLinkedin className="iconPerfilSocial" />
                            <FaFacebookMessenger className="iconPerfilSocial" />
                            <FaInstagram className="iconPerfilSocial" />

                        </div>



                        <p className="p">Soy un programador que durante sus estudios se especializó en la creación de códigos. En mi práctica profesional en la fintech Moderna participé en la actualización de su aplicación. Mi objetivo es aplicar mis conocimientos y aptitudes profesionales en conseguir la satisfacción de los usuarios que entren a las webs que programe.</p>
                        <p className="p">Aunque soy un recién graduado, tengo mucho que aportar a su empresa y seguro que en ella aprenderé mucho más....</p>

                        <p className="p1">Yours sincerely</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;