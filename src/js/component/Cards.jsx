import React from "react";
import "../../styles/index.css"
import CardImg from "./CardImg.jsx"


const Card = (props) => {
  return (
    <div className="col-12 col-md-3 mb-5">
      <div className="card w-100  text-center">
        <CardImg imagen={props.imagen} />
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="card-footer ">
          <a href="#" className="btn btn-primary ">
            {props.buttonDescription} 
          </a>
        </div>
      </div>  
    </div>

  )
}

export default Card;