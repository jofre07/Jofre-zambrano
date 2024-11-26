import React, {useEffect} from "react";
import "../../../estilos/Stile_lineTime.css";

function LineTime(props) {
    useEffect(() => {
        let secciontranform = document.querySelectorAll('.hide');
        console.log(secciontranform)

        const obsever = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("show", entry.isIntersecting)
            })
        })
        secciontranform.forEach((seccion) => obsever.observe(seccion));

    }, [])
    
    return (
        /*
        <div className="containeLineTime hide">
            <div className="linetimecenter linetimeleftRespnose">
                <div className="lineyear lineyear1" for="GroupLine">
                    <h5>3920</h5>
                </div>
                <div className="hr"></div>

                <div className="lineyear lineyear2">
                    <h5>3920</h5>
                </div>
                <div className="hr"></div>
            </div>

            <div className="lineTime">
                <div className="linetimeleft wight" id="GroupLine">
                    <div className="texoTime">
                        <div className="lineHeader LineH4">
                            <h4>{props.titulo}</h4>
                        </div>
                        <hr />
                        <div className="descripcion">
                            <p>{props.descripcion}</p>
                        </div>
                    </div>
                </div>
                <div className="linetimecenter linetimecenter1">
                    <div className="lineyear lineyear1">
                        <h5>3920</h5>
                    </div>
                    <div className="hr"></div>

                    <div className="lineyear lineyear2">
                        <h5>3920</h5>
                    </div>
                    <div className="hr"></div>
                </div>
                <div className="linetimering wight ">
                    <div className="texoTime">
                        <div className="lineHeader1 LineH4">
                            <h4>{props.titulo}</h4>
                        </div>
                        <hr />
                        <div className="descripcion">
                            <p>{props.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        */
        <div className="conteiner_time_line">
            <div className="container_LineTime">
                <div className="ano_LineTime">
                    <h5>3920</h5>
                </div>
                <div className="title_line_time">
                    <h4>{props.titulo}</h4>
                </div>
                <div className="decripcion_limetime">
                    <div className ='decripcion_limetime_1'></div>
                    <div className ='decripcion_limetime_2'>
                        <p>{props.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>


    );


}

export default LineTime;