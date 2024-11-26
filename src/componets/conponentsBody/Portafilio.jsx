import React, {useEffect} from "react";
import '../../estilos/portafoli.css'

function Portafolio() {
	useEffect(() => {
        let secciontranform = document.querySelectorAll('.divImag');
        console.log(secciontranform)

        const obsever = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("show", entry.isIntersecting)
            })
        })
        secciontranform.forEach((seccion) => obsever.observe(seccion));

    }, [])

	return (
		<div className="portafilioConteiner">
			

			<div className="portafolio">
				<div className="divImag divImg1">
					<img src="img/pages.png" alt="" className="imgportafolio" />
				</div>
				<div className="divImag divImg1">
					<img src="img/pages1.png" alt="" className="imgportafolio" />
				</div>
				<div className="divImag divImg1">
					<img src="img/pages3.png" alt="" className="imgportafolio" />
				</div>

				<div className="divImag divImg1">
					<img src="img/pages3.png" alt="" className="imgportafolio" />
				</div>
				<div className="divImag divImg1">
					<img src="img/pages.png" alt="" className="imgportafolio" />
				</div>
				<div className="divImag divImg1">
					<img src="img/pages1.png" alt="" className="imgportafolio" />
				</div>

			</div>
		</div>
	);


}

export default Portafolio;