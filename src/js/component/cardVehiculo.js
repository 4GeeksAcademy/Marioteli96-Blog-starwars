import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CardVehiculo = (props) => (
<div className="card" key={props.id}>
    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} className="card-img-top" alt="Character image" />
    <div className="card-body">
        <h5 className="card-text">{props.name}</h5>
        <div className="card-text">
            <Link className="btn btn-primary" to= {"/detallesVehiculos/"+props.id}>Ver vehiculos</Link>
        </div>
    </div>
</div>
);
