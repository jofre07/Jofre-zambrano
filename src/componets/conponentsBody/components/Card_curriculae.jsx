import React from "react";
import "../../../estilos/Card_currículums.css";

const Card_currículums = (props) => {
    console.log(props)
    return (
        <div className="cards">
            <div className="anoDescripcion">
                <span className="cicle">{props.data.ano}</span>
                <div className="descripcion">
                    <p>{props.data.descripcion} </p>
                </div>
            </div>
            <div className="title">
                <h5>{props.data.title}</h5>
            </div>

        </div>
    );
};

export default Card_currículums;
