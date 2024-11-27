import React from "react";
import "../../estilos/Contact.css";
import { FaRegAddressCard, FaInstagram, FaLinkedin, FaFacebookSquare, FaFacebookMessenger } from 'react-icons/fa';

function Contact() {
	return (
		<div className="contenedor-contacto">
			<iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2549.7081840521178!2d-80.16371984140768!3d-0.8472006954032644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1696626582166!5m2!1ses-419!2sec" > </iframe>
            
			<div className="correo">
				<div className="direccion">
                    <h2>CONTACT ADRESS</h2>
					<div className="datos-direccion">
                        <div className="icon-contact">
                             <FaRegAddressCard className="icon-direccion" />
                        </div>
                        <div>
                            <p><b>Address:</b> Manabi/bolivar/Calceta --entrada cabellos </p>
                        </div>
                    </div>
					<div className="datos-direccion">
                        <div className="icon-contact">
                             <FaRegAddressCard className="icon-direccion" />
                        </div>
                        <div>
                            <p><b>Phone:</b> +593 991 977 302 </p>
                        </div>
                    </div>
					<div className="datos-direccion">
                        <div className="icon-contact">
                             <FaRegAddressCard className="icon-direccion" />
                        </div>
                        <div>
                            <p><b>Whatsap:</b> +593 991 977 302 </p>
                        </div>
                    </div>
					<div className="datos-direccion">
                        <div className="icon-contact">
                             <FaRegAddressCard className="icon-direccion" />
                        </div>
                        <div>
                            <p><b>Skipe:</b> e example </p>
                        </div>
                    </div>
					<div className="datos-direccion">
                        <div className="icon-contact">
                             <FaRegAddressCard className="icon-direccion" />
                        </div>
                        <div>
                            <p className="resaltado"><b>Email:</b> Jofre.z.z.07@gmail.com </p>
                        </div>
                    </div>
					<div className="datos-direccion">
                        <div className="icon-contact">
                             <FaRegAddressCard className="icon-direccion" />
                        </div>
                        <div>
                            <p className="resaltado"><b>Website:</b> https://jofre07.github.io/Jofre-zambrano/ </p>
                        </div>
                    </div>
                    <div className="perfilS">
                        
                        <FaInstagram className="iconSocial"/>
                        <FaFacebookSquare className="iconSocial"/>
                        <FaLinkedin className="iconSocial"/>
                        <FaFacebookMessenger className="iconSocial"/>
                        <FaInstagram className="iconSocial"/>

                    </div>

				</div>
				<div className="mensajes">
                    <h2>LET'S HAVE A FUN</h2>
                    <form action="#" autoComplete="off" className="form">
                        <input type="text" name="nombre" placeholder="Your Name" className="campo"/>
                        <input type="text" name="email" placeholder="E-mail" className="campo"/>
                        <input type="text" name="phone" placeholder="Phone" className="campo"/>
                        <textarea name="save" placeholder="Your Message" ></textarea>
                        <input type="submit" name="enviar" value="Send Now" className="btn-enviar" />
                    </form>
				</div>
			</div>
			
		</div>
	);


}

export default Contact;