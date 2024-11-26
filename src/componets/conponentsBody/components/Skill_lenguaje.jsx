import React from "react"
import '../../../estilos/skill.css'


const Skill_lenguaje = ({key, data_Lengua}) =>{

	return (
		<div className="porcentajes">
			<svg width="150" height="150">
				<circle className="circulo-1" r="65" cx="50%" cy="50%" pathLength="100" />
				<circle className="circulo-1" r="65" cx="50%" cy="50%" pathLength="100" 
					style={{
						stroke: data_Lengua.color, // Usa el color dinámico
						strokeDasharray: `${data_Lengua.percentage} 100`,
					  }}
				/>
			</svg>
			<span className="numero">{data_Lengua.percentage}%"</span>
			<span className="texto">{data_Lengua.lenguaje}</span>
		</div>
	)
}

export default Skill_lenguaje;

 
