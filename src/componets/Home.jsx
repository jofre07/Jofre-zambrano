import React from "react";
import '../estilos/Home.css'
import Navbar from "./Navbar";

function Home() {
	return (
		<div className="contenedor-principal">
			<Navbar />
			<div className="conterFird">
				<div className="contenedor-texto-principal">
					<h2 className="texto-saludo">HELLO I'M</h2>
					<h1 className="texto-nombre">JOFRE ZAMBRANO</h1>
					<h2 className="texto-cargo">FULL STACK-DEVELOPER</h2>
					<button className="btn-descargar-cv">
						DONWLOAD MY CV
					</button>
					<i class="fa-solid fa-download"></i>
					<div className="heroware">
						<svg
							viewBox="0 0 500 150"
							preserveAspectRatio="none"
							style={{ height: "100%", width: "100%" }}
						>
							<path
								d="M-0.84,77.78 C153.78,202.13 286.96,37.33 501.97,120.22 L500.00,150.00 L0.00,150.00 Z"
								style={{ stroke: "none", fill: "white" }}
							></path>
						</svg>
					</div>
				</div>

			</div>

		</div>
	);


}

export default Home;