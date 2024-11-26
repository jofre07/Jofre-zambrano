import React from "react";
import "../../estilos/resumes.css"
import LineTime from "./components/LineTime";
import Card_currículums from "./components/Card_curriculae";
import DataCurriculums from "../conponentsBody/data/DataCurriculums.json"


function Resumes() {
    return (
        <div className="curriculumss">
            <div className="resumens">
                {
                    DataCurriculums.map((data, index)=>
                
                        <Card_currículums data ={data} index={index}/>,
                        
                    )
                }
                
            </div>  
                   
        </div>
    );


}

export default Resumes;