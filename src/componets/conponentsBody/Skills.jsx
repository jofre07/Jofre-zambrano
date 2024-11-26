import React from "react";
import '../../estilos/skill.css'
import Skill_lenguaje from "../conponentsBody/components/Skill_lenguaje.jsx";
import dataLenguajes from "../conponentsBody/data/Lenguajes.json"




window.addEventListener('scroll', () => {
	const skillsSection = document.querySelector('.contenedor-barras');
	const progressBars = document.querySelectorAll('.skill');

	const sectionTop = skillsSection.getBoundingClientRect().top;
	const sectionBottom = skillsSection.getBoundingClientRect().bottom;
	const windowHeight = window.innerHeight;

	// Verificar si la sección está visible
	if (sectionTop < windowHeight - 100 && sectionBottom > 0) {
		progressBars.forEach(bar => {
			const percentage = bar.getAttribute('data-percentage');
			bar.style.width = `${percentage}%`;
		});
	} else {
		// Restaurar al estado inicial si la sección ya no es visible
		progressBars.forEach(bar => {
			bar.style.width = '0';
		});
	}
});

console.log(dataLenguajes)

function Skills() {
	return (
		<div className="contenedor-skill">
			<div className="habilidades">

				<div className="contenedor-barras">
					<h2>TRANSFERABLE SKILLS</h2>
					<div className="container1">

						<div className="skill comunication" data-percentage="75">
							<p>Comunication</p>
							75%
						</div>
					</div>
					<div className="container1">

						<div className="skill team" data-percentage="80"> 
							<p>Team work</p>
							80%
						</div>
					</div>
					<div className="container1">

						<div className="skill loadership" data-percentage="97">
							<p>LoaderShip</p>
							97%
						</div>
					</div>
					<div className="container1">

						<div className="skill management" data-percentage="70">
							<p>Time Management</p>
							70%
						</div>
					</div>
				</div>

				<div className="contenedor-barras">
					<h2>TRANSFERABLE SKILLS</h2>
					<div className="container1">

						<div className="skill comunication" data-percentage="87">
							<p>Comunication</p>
							75%
						</div>
					</div>
					<div className="container1">

						<div className="skill team" data-percentage="80">
							<p>Team work</p>
							80%
						</div>
					</div>
					<div className="container1">

						<div className="skill loadership" data-percentage="97">
							<p>Leadership</p>
							97%
						</div>
					</div>
					<div className="container1">

						<div className="skill management " data-percentage="70">
							<p>Time Management</p>
							70%
						</div>
					</div>
				</div>
			</div>


			<div className="contenedor-graficos-circulares">
				<h2>LANGUAJE SKILLS & KNOWLEDGE</h2>
				<div className="graficos-circular">
					{
						dataLenguajes.map(( objeto, index) =>
				
							<Skill_lenguaje key={index} data_Lengua={objeto}/>
						)
						
					}
				</div>
			</div>

		</div>
	);


}

export default Skills;