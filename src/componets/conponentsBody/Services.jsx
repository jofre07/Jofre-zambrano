import React from "react";
import "../../estilos/servicios.css"
import { FaMobileAlt, FaCode, FaServer, FaCameraRetro, FaPaintBrush, FaSuitcase } from 'react-icons/fa';

function Services() {
	return (
		<div className="servicio">
			<div className="card">



				<div className="texto-1">
					<div className="servicesTitle">
						<FaCode className="iconskill" />
						<h2>Web Development</h2>
					</div>

					<p>Poseo un sólido desempeño en la creación y desarrollo de aplicaciones web, con habilidades en diseño responsivo e integración de funcionalidades interactivas.</p>
				</div>

			</div>
			<div className="card">


				<div className="texto-1">
					<div className="servicesTitle">
						<FaPaintBrush className="iconskill" />
						<h2>Designig</h2>
					</div>

					<p>Me desempeño con entusiasmo en diseño, creando interfaces visuales atractivas y funcionales. Estoy en constante aprendizaje para mejorar mis habilidades y ofrecer soluciones creativas y efectivas..</p>
				</div>
			</div>
			<div className="card">




				<div className="texto-1">
					<div className="servicesTitle">
						<FaSuitcase className="iconskill" />
						<h2>Marketing</h2>
					</div>

					<p>Tengo un interés creciente en el marketing, enfocándome en estrategias creativas para promocionar productos y servicios.</p>
				</div>
			</div>
			<div className="card">

				<div className="texto-1">
					<div className="servicesTitle">
						<FaMobileAlt className="iconskill" />
						<h2>Mobile Development</h2>
					</div>

					<p>Tengo conocimientos básicos en desarrollo móvil y puedo crear aplicaciones funcionales. Estoy en proceso de fortalecer mis habilidades para ofrecer soluciones más completas y efectivas..</p>
				</div>
			</div>


		</div>
	);


}

export default Services;