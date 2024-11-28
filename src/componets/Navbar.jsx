import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { FaRegWindowClose, FaBars } from 'react-icons/fa';


import './navbar.css'
const Navbar = () => {

    //const [isOpen, setIsOpen] = useState(false);

    const abrirMenu = () => {
        const ul = document.querySelector('.menuUl')
        console.log(ul)
        ul.classList.toggle('menuUlOpen')
    }

    const cerrarMenu = () => {
        const ul = document.querySelector('.menuUl')
        ul.classList.remove('menuUlOpen')
    }

    // // Función para abrir o cerrar el menú
    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    // // Función para cerrar el menú al hacer clic en una opción
    // const closeMenu = () => {
    //     setIsOpen(false);
    // };

    return (
        <nav className="containerNavbar containerNavbar1">
            <img src="img/Imagen_jofre.jpg" alt="" className="logo logo1" />
            <FaBars className="logomenu" onClick={abrirMenu} />
            <div className="menuUl">
                <div className="menucloseopen">
                    <img src="img/Imagen_jofre.jpg" alt="" className="logo logo2" />

                    <FaRegWindowClose className="logoclose logo" onClick={cerrarMenu} />
                </div>

                <ul className="ul">
                    <hr className="line" />
                    <li><a onClick={cerrarMenu} href="#">HOME</a></li>
                    <li><a onClick={cerrarMenu} href="#about">ABOUT ME</a></li>
                    <li><a onClick={cerrarMenu} href="#skills">SKILLS</a></li>
                    <li><a onClick={cerrarMenu} href="#resumes">RESUMES</a></li>
                    <li><a onClick={cerrarMenu} href="#services">SERVICES</a></li>
                    <li><a onClick={cerrarMenu} href="#portafolio">PORTAFOLIO</a></li>
                    <li><a onClick={cerrarMenu} href="#contacto">CONTACT</a></li>

                </ul>

            </div>




        </nav>
    )
}

export default Navbar;