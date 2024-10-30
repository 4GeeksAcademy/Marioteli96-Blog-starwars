import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CardPlaneta = (props) => (
<div className="card" key={props.id}>
    <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="Planet image" />
    <div className="card-body">
        <h5 className="card-text">{props.name}</h5>
        <div className="card-text">
            <Link className="btn btn-primary" to= {"/detallesPlaneta/"+props.id}>Ver planetas</Link>
        </div>
    </div>
</div>
);
