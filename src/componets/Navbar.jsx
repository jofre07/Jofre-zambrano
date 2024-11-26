import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaRegWindowClose, FaBars } from 'react-icons/fa';


import './navbar.css'
const Navbar = () => {

    const abrirMenu = () =>{
        const ul=document.querySelector('.menuUl')
        console.log(ul)
        ul.classList.toggle('menuUlOpen')
    }

    const cerrarMenu = () =>{
        const ul=document.querySelector('.menuUl')
        ul.classList.remove('menuUlOpen')
    }

    return (
        <nav className="containerNavbar containerNavbar1">
            <img src="img/Imagen_jofre.jpg" alt="" className="logo logo1" />
            <FaBars className="logomenu" onClick={abrirMenu}/>
            <div className="menuUl">
                <div className="menucloseopen">
                    <img src="img/Imagen_jofre.jpg" alt="" className="logo logo2" />
                    
                    <FaRegWindowClose className="logoclose logo" onClick={cerrarMenu}/>
                </div>

                <ul className="ul">
                    <hr className="line"/>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#about">ABOUT ME</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#resumes">RESUMES</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#portafolio">PORTAFOLIO</a></li>
                    <li><a href="#contacto">CONTACT</a></li>

                </ul>

            </div>




        </nav>
    )
}

export default Navbar;